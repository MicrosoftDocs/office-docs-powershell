---
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsVideoInteropServerSyntheticTransactionConfiguration

## SYNOPSIS
Use the Set-CsVideoInteropServerSyntheticTransactionConfiguration cmdlet to modify an existing Video Interop Server (VIS) synthetic transaction configuration.

## SYNTAX

### Identity
```
Set-CsVideoInteropServerSyntheticTransactionConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-Force]
 [-WatcherNodeFqdns <PSListModifier>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsVideoInteropServerSyntheticTransactionConfiguration [-Confirm] [-Force] [-Instance <PSObject>]
 [-WatcherNodeFqdns <PSListModifier>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

This example sets the Global configuration to trust connections from the WatcherNode "watchernode.contoso.com".

Set-CsVideoInteropServerSyntheticTransactionConfiguration -Identity Global -WatcherNodeFqdns "watchernode.contoso.com"

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

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

### -Identity
Unique identity assigned to the VIS configuration when it was created.
VIS settings can be configured at the global, site, or service scope (for the VideoInteropServer service only).
To refer to the global instance, use this syntax:

-Identity "Global"

Use this syntax to refer to a collection at the site scope:

-Identity "site:Redmond"

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WatcherNodeFqdns
Specifies the URL of the watcher node relevant to the synthetic transaction.
For example: -WatcherNodeFqdns "atl-cs-001.Contoso.com".
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Skype for Business Server synthetic transactions to verify that Skype for Business Server components are working as expected.
For more information, see New-CsWatcherNodeConfiguration.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>....
If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

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
Accepts pipelined instances of the VideoInteropServerSyntheticTransactionConfiguration object.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsVideoInteropServerSyntheticTransactionConfiguration]()

[New-CsVideoInteropServerSyntheticTransactionConfiguration]()

[Remove-CsVideoInteropServerSyntheticTransactionConfiguration]()

[Test-CsP2PVideoInteropServerSipTrunkAV]()

[Online Version](http://technet.microsoft.com/EN-US/library/c257fe1f-7d35-4d73-b960-897baf999ae1(OCS.16).aspx)

