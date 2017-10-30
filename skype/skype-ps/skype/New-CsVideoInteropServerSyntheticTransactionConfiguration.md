---
external help file: 
applicable: Skype for Business Server 2015
title: New-CsVideoInteropServerSyntheticTransactionConfiguration
schema: 2.0.0
---

# New-CsVideoInteropServerSyntheticTransactionConfiguration

## SYNOPSIS
Use the `New-CsVideoInteropServerSyntheticTransactionConfiguration` cmdlet to create a new Video Interop Server (VIS) synthetic transaction configuration.
The cmdlet can be applied at the Global, Site and Service levels.

## SYNTAX

```
New-CsVideoInteropServerSyntheticTransactionConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force]
 [-InMemory] [-WatcherNodeFqdns <PSListModifier>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsVideoInteropServerSyntheticTransactionConfiguration -Identity "site:Redmond" -WatcherNodeFqdns "atl-cs-001.contoso.com", "atl-cs-002.contoso.com"
```

This example creates a new Video Interop Server synthetic transaction configuration with two watcher nodes and scoped for the Redmond site.


## PARAMETERS

### -Identity
The Identity parameter specifies the Video Interop Server synthetic transaction configuration to create.
Video Interop Server synthetic transaction configuration settings can be configured at the global, site, or service scope.
To refer to the global instance, use this syntax:

`-Identity "Global"`

Use this syntax to refer to a collection at the site scope:

`-Identity "site:Redmond"`

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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

### -WatcherNodeFqdns
Specifies the FQDN of the watcher node relevant to the synthetic transaction.
For example: `-WatcherNodeFqdns "atl-cs-001.contoso.com"`.
Watcher nodes are computers that periodically use System Center Operations Manager and Skype for Business Server synthetic transactions to verify that Skype for Business Server components are working as expected.
For more information, see `New-CsWatcherNodeConfiguration`.

To enter multiple values and overwrite any existing entries, use the following syntax: `\<value1\>,\<value2\>....`
If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: `"\<value1\>","\<value2\>"....`

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}`.

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
None

## OUTPUTS

###  
Returns a VideoInteropServerSyntheticTransactionConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsVideoInteropServerSyntheticTransactionConfiguration](Get-CsVideoInteropServerSyntheticTransactionConfiguration.md)

[Set-CsVideoInteropServerSyntheticTransactionConfiguration](Set-CsVideoInteropServerSyntheticTransactionConfiguration.md)

[Remove-CsVideoInteropServerSyntheticTransactionConfiguration](Remove-CsVideoInteropServerSyntheticTransactionConfiguration.md)

[Test-CsP2PVideoInteropServerSipTrunkAV](Test-CsP2PVideoInteropServerSipTrunkAV.md)
