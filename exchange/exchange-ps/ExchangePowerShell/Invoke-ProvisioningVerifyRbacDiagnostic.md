---
applicable: Exchange Online
external help file:
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/invoke-provisioningverifyrbacdiagnostic
schema: 2.0.0
title: Invoke-ProvisioningVerifyRbacDiagnostic
---

# Invoke-ProvisioningVerifyRbacDiagnostic

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Invoke-ProvisioningVerifyRbacDiagnostic cmdlet to analyze and repair role-based access control (RBAC) configurations in cloud-based organizations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### CmdletCheck
```
Invoke-ProvisioningVerifyRbacDiagnostic -CmdletName <String> [-CmdletParameters <String[]>] -User <String>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

### Compare
```
Invoke-ProvisioningVerifyRbacDiagnostic -ReferenceUser <String> -User <String>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Invoke-Provisioning\*Diagnostic cmdlets are intended for targeted troubleshooting, not bulk diagnostics. To protect service health, these cmdlets are currently limited 100 diagnostic calls per hour per organization.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Invoke-ProvisioningVerifyRbacDiagnostic -User arnold@contoso.onmicrosoft.com -CmdletName Set-Mailbox -CmdletParameters DisplayName
```

This example verifies whether the specified user has access to the specified cmdlet and parameter on that cmdlet.

## PARAMETERS

### -CmdletName

> Applicable: Exchange Online

The CmdletName parameter specifies the cmdlet you want to check.

To check specific parameters on the cmdlet, use the CmdletParameters parameter.

```yaml
Type: String
Parameter Sets: CmdletCheck
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReferenceUser

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Compare
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User

> Applicable: Exchange Online

The User parameter specifies the email address of the user you want to check.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CmdletParameters

> Applicable: Exchange Online

```yaml
Type: String[]
Parameter Sets: CmdletCheck
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
