---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Clear-CsDeviceUpdateFile
schema: 2.0.0
---

# Clear-CsDeviceUpdateFile

## SYNOPSIS
Deletes any rejected device update files that are no longer associated with a device.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Clear-CsDeviceUpdateFile [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Each time new device updates are uploaded to the system, a corresponding device update rule is created.
By default, these new device update rules are assigned to the Pending state; that means that the rules can be downloaded and installed on test devices, but not on production devices.
In turn, this gives you an opportunity to test the updates before making them available to users.
If testing is successful, you can then run the Approve-CsDeviceUpdateRule cmdlet to make these device updates available to users.

If testing is not successful then you can use the Reset-CsDeviceUpdateRule cmdlet or the Restore-CsDeviceUpdateRule cmdlet to reject an update.
When these cmdlets are run, the device update is disassociated from its device update rule.
At that point, administrators can then use the Clear-CsDeviceUpdateFile cmdlet to remove the disassociated updates from the server.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Clear-CsDeviceUpdateFile cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Clear-CsDeviceUpdateFile"}`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Clear-CsDeviceUpdateFile -Identity "service:WebServer:atl-cs-001.litwareinc.com"
```

The command shown in Example 1 deletes all the device update files from the service WebServer:atl-cs-001.litwareinc.com that are no longer associated with a device.



## PARAMETERS

### -Identity
Unique identifier of the service hosting the device update files.
For example, this syntax clears device update files from the Web Services service for the pool atl-cs-001.litwareinc.com: -Identity "service:WebServer:atl-cs-001.litwareinc.com".

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
None.
The Clear-CsDeviceUpdateFile cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
The Clear-CsDeviceUpdateFile cmdlet does not return any values.

## NOTES

## RELATED LINKS
[Clear-CsDeviceUpdateLog](Clear-CsDeviceUpdateLog.md)

[Get-CsDeviceUpdateConfiguration](Get-CsDeviceUpdateConfiguration.md)
