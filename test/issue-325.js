"use strict";

var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 325.', function () {
  test('issue-325-A ["Mozilla/5.0 (Linux; U; en-us; KFSOWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.19 Safari/535.19 Silk-Accelerated=true"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; U; en-us; KFSOWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.19 Safari/535.19 Silk-Accelerated=true');

    assert.strictEqual(browser['Browser'], 'Silk', 'Expected actual "Browser" to be \'Silk\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Amazon.com, Inc.', 'Expected actual "Browser_Maker" to be \'Amazon.com, Inc.\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'Desktop Mode', 'Expected actual "Browser_Modus" to be \'Desktop Mode\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '3.19', 'Expected actual "Version" to be \'3.19\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '3', 'Expected actual "MajorVer" to be \'3\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '19', 'Expected actual "MinorVer" to be \'19\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc', 'Expected actual "Platform_Maker" to be \'Google Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], true, 'Expected actual "isMobileDevice" to be true (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], true, 'Expected actual "isTablet" to be true (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Kindle Fire HD 7', 'Expected actual "Device_Name" to be \'Kindle Fire HD 7\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Amazon.com, Inc.', 'Expected actual "Device_Maker" to be \'Amazon.com, Inc.\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Tablet', 'Expected actual "Device_Type" to be \'Tablet\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen', 'Expected actual "Device_Pointing_Method" to be \'touchscreen\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'KFSOWI', 'Expected actual "Device_Code_Name" to be \'KFSOWI\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'Amazon', 'Expected actual "Device_Brand_Name" to be \'Amazon\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit', 'Expected actual "RenderingEngine_Name" to be \'WebKit\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc', 'Expected actual "RenderingEngine_Maker" to be \'Apple Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-325-B ["Mozilla/5.0 (Linux; U; en-gb; KFTHWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.19 Safari/535.19 Silk-Accelerated=true"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (Linux; U; en-gb; KFTHWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.19 Safari/535.19 Silk-Accelerated=true');

    assert.strictEqual(browser['Browser'], 'Silk', 'Expected actual "Browser" to be \'Silk\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Amazon.com, Inc.', 'Expected actual "Browser_Maker" to be \'Amazon.com, Inc.\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'Desktop Mode', 'Expected actual "Browser_Modus" to be \'Desktop Mode\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '3.19', 'Expected actual "Version" to be \'3.19\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '3', 'Expected actual "MajorVer" to be \'3\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '19', 'Expected actual "MinorVer" to be \'19\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Android', 'Expected actual "Platform" to be \'Android\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Google Inc', 'Expected actual "Platform_Maker" to be \'Google Inc\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], true, 'Expected actual "isMobileDevice" to be true (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], true, 'Expected actual "isTablet" to be true (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Kindle Fire HDX 7 WiFi', 'Expected actual "Device_Name" to be \'Kindle Fire HDX 7 WiFi\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Amazon.com, Inc.', 'Expected actual "Device_Maker" to be \'Amazon.com, Inc.\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Tablet', 'Expected actual "Device_Type" to be \'Tablet\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen', 'Expected actual "Device_Pointing_Method" to be \'touchscreen\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'KFTHWI', 'Expected actual "Device_Code_Name" to be \'KFTHWI\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'Amazon', 'Expected actual "Device_Brand_Name" to be \'Amazon\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit', 'Expected actual "RenderingEngine_Name" to be \'WebKit\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc', 'Expected actual "RenderingEngine_Maker" to be \'Apple Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-325-C ["Mozilla/5.0 (DirectFB; Linux; ko-KR) AppleWebKit/534.26 (KHTML, like Gecko) Version/5.0 Safari/534.26"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (DirectFB; Linux; ko-KR) AppleWebKit/534.26 (KHTML, like Gecko) Version/5.0 Safari/534.26');

    assert.strictEqual(browser['Browser'], 'Safari', 'Expected actual "Browser" to be \'Safari\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Apple Inc', 'Expected actual "Browser_Maker" to be \'Apple Inc\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '5.0', 'Expected actual "Version" to be \'5.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '5', 'Expected actual "MajorVer" to be \'5\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Linux Foundation', 'Expected actual "Platform_Maker" to be \'Linux Foundation\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Linux Desktop', 'Expected actual "Device_Name" to be \'Linux Desktop\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Various', 'Expected actual "Device_Maker" to be \'Various\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Linux Desktop', 'Expected actual "Device_Code_Name" to be \'Linux Desktop\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit', 'Expected actual "RenderingEngine_Name" to be \'WebKit\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc', 'Expected actual "RenderingEngine_Maker" to be \'Apple Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-325-D ["Mozilla/5.0 (X11; U; Linux x86_64; C) AppleWebKit/533.3 (KHTML, like Gecko) Qt/4.7.1 Safari/533.3"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (X11; U; Linux x86_64; C) AppleWebKit/533.3 (KHTML, like Gecko) Qt/4.7.1 Safari/533.3');

    assert.strictEqual(browser['Browser'], 'Qt', 'Expected actual "Browser" to be \'Qt\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '64', 'Expected actual "Browser_Bits" to be \'64\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'unknown', 'Expected actual "Browser_Maker" to be \'unknown\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '4.7', 'Expected actual "Version" to be \'4.7\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '4', 'Expected actual "MajorVer" to be \'4\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '7', 'Expected actual "MinorVer" to be \'7\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '64', 'Expected actual "Platform_Bits" to be \'64\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Linux Foundation', 'Expected actual "Platform_Maker" to be \'Linux Foundation\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Linux Desktop', 'Expected actual "Device_Name" to be \'Linux Desktop\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Various', 'Expected actual "Device_Maker" to be \'Various\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Linux Desktop', 'Expected actual "Device_Code_Name" to be \'Linux Desktop\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit', 'Expected actual "RenderingEngine_Name" to be \'WebKit\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc', 'Expected actual "RenderingEngine_Maker" to be \'Apple Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-325-E ["Mozilla/5.0 (X11; Linux) AppleWebKit/534.34 (KHTML, like Gecko) QtCarBrowser Safari/534.34"]', function () {
    browser = browscap.getBrowser('Mozilla/5.0 (X11; Linux) AppleWebKit/534.34 (KHTML, like Gecko) QtCarBrowser Safari/534.34');

    assert.strictEqual(browser['Browser'], 'Model S Browser', 'Expected actual "Browser" to be \'Model S Browser\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Tesla Motors', 'Expected actual "Browser_Maker" to be \'Tesla Motors\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '0.0', 'Expected actual "Version" to be \'0.0\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '0', 'Expected actual "MajorVer" to be \'0\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '0', 'Expected actual "MinorVer" to be \'0\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Linux Foundation', 'Expected actual "Platform_Maker" to be \'Linux Foundation\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Model S', 'Expected actual "Device_Name" to be \'Model S\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'Tesla Motors', 'Expected actual "Device_Maker" to be \'Tesla Motors\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Car Entertainment System', 'Expected actual "Device_Type" to be \'Car Entertainment System\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'unknown', 'Expected actual "Device_Pointing_Method" to be \'unknown\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Model S', 'Expected actual "Device_Code_Name" to be \'Model S\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'Tesla', 'Expected actual "Device_Brand_Name" to be \'Tesla\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit', 'Expected actual "RenderingEngine_Name" to be \'WebKit\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc', 'Expected actual "RenderingEngine_Maker" to be \'Apple Inc\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});
