---
external help file: 
applicable: Skype for Business Server 2015
title: Remove-CsVideoInteropServerSyntheticTransactionConfiguration
schema: 2.0.0
---

# Remove-CsVideoInteropServerSyntheticTransactionConfiguration

## SYNOPSIS
Use the `Remove-CsVideoInteropServerSyntheticTransactionConfiguration` cmdlet to remove an existing Video Interop (VIS) server synthetic transaction configuration.

## SYNTAX

```
Remove-CsVideoInteropServerSyntheticTransactionConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsVideoInteropServerSyntheticTransactionConfiguration -Identity "site:Redmond"
```

This example removes the Video Interop Server synthetic transaction configuration for the Redmond site.


## PARAMETERS

### -Identity
Identity of the VIS configuration to be removed.
VIS settings can be configured at the global, site, or service scope (for the VideoInteropServer service only).
To refer to the global instance, use this syntax:

`-Identity "Global"`

Use this syntax to refer to a collection at the site scope:

`-Identity "site:Redmond"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
None

## NOTES

## RELATED LINKS

[Get-CsVideoInteropServerSyntheticTransactionConfiguration](Get-CsVideoInteropServerSyntheticTransactionConfiguration.md)

[Set-CsVideoInteropServerSyntheticTransactionConfiguration](Set-CsVideoInteropServerSyntheticTransactionConfiguration.md)

[New-CsVideoInteropServerSyntheticTransactionConfiguration](New-CsVideoInteropServerSyntheticTransactionConfiguration.md)

[Test-CsP2PVideoInteropServerSipTrunkAV](Test-CsP2PVideoInteropServerSipTrunkAV.md)
