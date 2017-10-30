---
external help file: 
applicable: Skype for Business Server 2015
title: Remove-CsCallViaWorkPolicy
schema: 2.0.0
---

# Remove-CsCallViaWorkPolicy

## SYNOPSIS
Use the `Remove-CsCallViaWorkPolicy` cmdlet to delete an existing call via work policy.
Call via work policies enable and manage the characteristics of outbound calls placed through the Skype for Business client.

## SYNTAX

```
Remove-CsCallViaWorkPolicy [-Identity] <XdsIdentity> [-Confirm] [-Force] [-Tenant <Guid>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsCallViaWorkPolicy -Identity CvWStandardPolicy
```

This example removes a per-user scoped policy named "CvWStandardPolicy".


## PARAMETERS

### -Identity
Specifies the identity of the policy to be removed.
Call via work policies can be specified at the global, site, or per-user scope.

The global policy will not be removed, but the parameters will be reset to the defaults.

Site syntax: `-Identity Site:Redmond`

Per-user syntax: `-Identity CallviaWorkStandard`

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

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
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
None.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Set-CsCallViaWorkPolicy](Set-CsCallViaWorkPolicy.md)

[New-CsCallViaWorkPolicy](New-CsCallViaWorkPolicy.md)

[Grant-CsCallViaWorkPolicy](Grant-CsCallViaWorkPolicy.md)

[Get-CsCallViaWorkPolicy](Get-CsCallViaWorkPolicy.md)
