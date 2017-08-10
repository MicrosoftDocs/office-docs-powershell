---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPresenceManagementState

## SYNOPSIS
Use the Get-CsPresenceManagementState to return the notification settings of a computer or pool.
The management state settings determine the batching and timing of Skype for Business Server 2015 notifications.

## SYNTAX

```
Get-CsPresenceManagementState [[-Fqdn] <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

This example returns the management state of a pool specified by its fully qualified domain name (FQDN).

Get-CsPresenceManagementState -Fqdn "atl-mcs-001.litwareinc.com"

## PARAMETERS

### -Force
The Force parameter is not implemented for this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn
Specifies the computer or pool to report.
The computer or pool should be referenced by using its fully qualified domain name (FQDN).
For example, -ComputerName "atl-mcs-001.litwareinc.com".
If a pool is specified, the output contains the management state of all the computers in the pool.
If FQDN is not specified, the settings for the local machine will be modified.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
The Get-CsPresenceManagementState cmdlet returns instances of the Microsoft.Rtc.Management.PresenceMaintain.Cmdlet.PresenceManagementState object.

## NOTES

## RELATED LINKS

[Set-CsPresenceManagementState]()

[Online Version](http://technet.microsoft.com/EN-US/library/6b7bc986-b655-4adf-87c5-b13b622ce333(OCS.16).aspx)

