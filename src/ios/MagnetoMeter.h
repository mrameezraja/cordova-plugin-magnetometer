//
//  MagnetoMeter.h
//  MagnetoMeterTest
//
//  Created by Rameez Raja<mrameezraja@gmail.com> on 8/20/15.
//
//


#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>
#import <CoreLocation/CoreLocation.h>

@interface MagnetoMeter : CDVPlugin<CLLocationManagerDelegate>
    - (void)getMagnitude:(CDVInvokedUrlCommand*)command;
    - (void)watchMagnitude:(CDVInvokedUrlCommand*)command;
    - (void)stopWatch:(CDVInvokedUrlCommand*)command;

    @property (copy)   NSString* callbackId;
@end


