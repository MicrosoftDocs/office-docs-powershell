---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/clear-csdeviceupdatelog
schema: 2.0.0
title: Clear-CsDeviceUpdateLog
---

# Clear-CsDeviceUpdateLog

## SYNOPSIS
Deletes all the Device Update Web service log and audit files that are older than the specified number of days.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Clear-CsDeviceUpdateLog [-Identity] <XdsIdentity> [-DaysBack] <Int32> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The Device Update Web service keeps an extensive collection of log files; this collection includes both audit logs conducted by the service itself as well as log files uploaded from client devices such as cell phones.
Depending on the amount of device update activity, and depending on the number of client devices used in your organization, your server could soon become "cluttered" with Device Update Web service logs.
The `Clear-CsDeviceUpdateLog` cmdlet provides a way for you to reduce the number of log files stored on the server: all you have to do is run the cmdlet and specify the maximum age (in days) of the files that should not be deleted.
Any log files older than that maximum age will be removed from the system.

Who can run this cmdlet: By default, members of the following groups are authorized to run the `Clear-CsDeviceUpdateLog` cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Clear-CsDeviceUpdateLog"}

## EXAMPLES

### Example 1
```
Clear-CsDeviceUpdateLog -Identity "service:WebServer:atl-cs-001.litwareinc.com" -DaysBack 10
```

The command shown in Example 1 connects to the Device Update Web service with the Identity "service:WebServer:atl-cs-001.litwareinc.com" and deletes all the device and audit logs that are more than 10 days old.


## PARAMETERS

### -DaysBack

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Maximum age (in days) of the log files to be maintained.
All log files older than the value specified using the DaysBack parameter will be deleted.
For example, if you set DaysBack to 7 then any log files more than seven days old will be removed.

This parameter can be set to any integer value between 1 and 30, inclusive.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier of the service hosting the Device Update Web service log files.
For example, this syntax clears Device Update Web service log files from the Web Services for the pool atl-cs-001.litwareinc.com: -Identity "service:WebServer:atl-cs-001.litwareinc.com".

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
The `Clear-CsDeviceUpdateLog` cmdlet does not accept pipelined input.

## OUTPUTS

### None
The `Clear-CsDeviceUpdateLog` cmdlet does not return any values.

## NOTES

## RELATED LINKS

[Clear-CsDeviceUpdateFile](Clear-CsDeviceUpdateFile.md)

[Get-CsDeviceUpdateConfiguration](Get-CsDeviceUpdateConfiguration.md)
