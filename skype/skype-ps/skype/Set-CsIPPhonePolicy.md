---
external help file: 
applicable: Skype for Business Online
title: Set-CsIPPhonePolicy
schema: 2.0.0
---

# Set-CsIPPhonePolicy

## SYNOPSIS
Use the Set-CsIPPhonePolicy cmdlet to modify the settings of the Skype for Business Online global IP phone policy. IP phone policies define the Skype for Business Online features that are available to users.

## SYNTAX

```
Set-CsIPPhonePolicy [[-Identity] <XdsIdentity>] [-BetterTogetherOverEthernetPairingMode <String>]
 [-BypassDualWrite <Object>] [-Confirm] [-DateTimeFormat <Int>] [-EnableBetterTogetherOverEthernet <Boolean>]
 [-EnableDeviceUpdate <Boolean>] [-EnableExchangeCalendaring <Boolean>] [-EnableOneTouchVoicemail <Boolean>]
 [-EnablePowerSaveMode <Boolean>] [-Force] [-Instance <PSObject>] [-KeyboardLockMaxPinRetry <UInt64>]
 [-LocalProvisioningServerAddress <String>] [-LocalProvisioningServerPassword <String>]
 [-LocalProvisioningServerType <String>] [-LocalProvisioningServerUser <String>]
 [-PowerSaveDuringOfficeHoursTimeoutMS <UInt64>] [-PowerSavePostOfficeHoursTimeoutMS <UInt64>]
 [-PrioritizedCodecsList <String>] [-Tenant <Guid>] [-UserDialTimeoutMS <UInt64>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
IP phone policies are applied each time a user accesses the system via an IP phone device. The Set-CsIPPhonePolicy cmdlet enables you to modify the global IP phone policy that has been configured in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsIPPhonePolicy -UserDialTimeoutMS 10000
```

This example modifies the global IP phone policy UserDialTimeoutMS parameter to 10 seconds (10000 ms).

### -------------------------- Example 2 --------------------------
```
Set-CsIPPhonePolicy -EnablePowerSaveMode $False -EnableOneTouchVoicemail $False -EnableDeviceUpdate $False
```

This example sets the EnablePowerSaveModeproperty, EnableOneTouchVoicemailvalues, and EnableDeviceUpdate parameters to $false.

## PARAMETERS

### -BetterTogetherOverEthernetPairingMode
Auto – The phone will get paired with BTOE app Automatically and no need for the user to enter the pairing code. Manual – The user needs to enter the pairing code manually to pair with the BTOE app. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateTimeFormat
Specifies the time format to be used. The acceptable values are "24" for a 24 hour time format, or "12" for a 12 hour format. The default is "24".

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableBetterTogetherOverEthernet
Specifies whether the Better Together Over Ethernet (BTOE) feature is enabled for users. If $true, and if the BTOE plugin is installed on the IP device, the user can tether the device to a PC and sign in to Skype for Business Online. The default is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDeviceUpdate
Specifies whether the IP device will be updated by the Skype for Business Online service. If set to $true, IP devices will get firmware updates from the service, if $false the device will not be updated. The default is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableExchangeCalendaring
Specifies whether an IP device is enabled to connect to the Exchange Online calendaring service. If $true, users are able to connect to their Exchange calendars. If $false, users will not be enabled to connect to their calendars. The default is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOneTouchVoicemail
Specifies whether the Visual Voicemail feature in Skype for Business Online is enabled. If set to $true, the feature is enabled, otherwise $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePowerSaveMode
If enabled, phone goes to power savings mode (display turns off) based on values of the PowerSaveDuringOfficeHoursTimeoutMS and PowerSavePostOfficeHoursTimeoutMS parameters.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeyboardLockMaxPinRetry
Specifies the maximum number of retries allowed for phone unlock. The default is 5.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerAddress
Specifies the address of the provisioning server for your organization. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerPassword
Specifies the password for the provisioning server. 

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerType
Specifies the server type for the phone. The default is FTP.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalProvisioningServerUser
Specifies a username for the provisioning server.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerSaveDuringOfficeHoursTimeoutMS
Specifies the time in milliseconds to wait during office hours before turning on Power Save mode. The default is 900,000.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PowerSavePostOfficeHoursTimeoutMS
Specifies the time in milliseconds to wait after office hours before turning on Power Save mode. The default is 300,000.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrioritizedCodecsList
Specifies the order in which to prioritize codecs. The default is: "G722_8000;PCMU;PCMA;G729"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserDialTimeoutMS
Specifies the time in milliseconds to wait in On-Hook mode before dialing out automatically. If a user enters a phone number and does not click dial, the system will dial the number after the number of milliseconds specified. The default is 5000. 

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### 
System.Management.Automation.PSObject

Microsoft.Rtc.Management.ADConnect.Schema.ADUser

## OUTPUTS

### System.Object
By default, the Grant-CsIPPhonePolicy cmdlet returns no objects or values. However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

## NOTES

## RELATED LINKS
[Grant-CsIPPhonePolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csipphonepolicy?view=skype-ps)

[Get-CsIPPhonePolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csipphonepolicy?view=skype-ps)
