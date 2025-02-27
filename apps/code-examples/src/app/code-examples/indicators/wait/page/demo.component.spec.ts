import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyWaitHarness } from '@skyux/indicators/testing';

import { DemoComponent } from './demo.component';

describe('Page wait', () => {
  function setupTest(): {
    rootLoader: HarnessLoader;
    fixture: ComponentFixture<DemoComponent>;
  } {
    const fixture = TestBed.createComponent(DemoComponent);
    const rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);

    return { rootLoader, fixture };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DemoComponent],
    });
  });

  it('should show the page wait component when the user performs an action', async () => {
    const { rootLoader, fixture } = setupTest();
    const buttons = fixture.nativeElement.querySelectorAll('.sky-btn');

    buttons[0].click();

    const waitHarness = await rootLoader.getHarness(
      SkyWaitHarness.with({ servicePageWaitType: 'blocking' })
    );

    await expectAsync(waitHarness.isWaiting()).toBeResolvedTo(true);
    await expectAsync(waitHarness.isFullPage()).toBeResolvedTo(true);
    await expectAsync(waitHarness.isNonBlocking()).toBeResolvedTo(false);
  });

  it('should show the non-blocking page wait component when the user performs an action', async () => {
    const { rootLoader, fixture } = setupTest();
    const buttons = fixture.nativeElement.querySelectorAll('.sky-btn');

    buttons[1].click();

    const waitHarness = await rootLoader.getHarness(
      SkyWaitHarness.with({ servicePageWaitType: 'non-blocking' })
    );

    await expectAsync(waitHarness.isWaiting()).toBeResolvedTo(true);
    await expectAsync(waitHarness.isFullPage()).toBeResolvedTo(true);
    await expectAsync(waitHarness.isNonBlocking()).toBeResolvedTo(true);
  });
});
