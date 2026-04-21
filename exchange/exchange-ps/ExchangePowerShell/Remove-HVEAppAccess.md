---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
external help file:
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-hveappaccess
schema: 2.0.0
title: Remove-HVEAppAccess
---

# Remove-HVEAppAccess

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-HVEAppAccess cmdlet to remove applications from the Allowed Apps list of a High Volume Email (HVE) account.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-HVEAppAccess [-Identity] <MailUserIdParameter> -AppIds <MultiValuedProperty>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
An HVE account is a special type of mail user (also known as a mail-enabled user) used to send large amounts of email. For more information, see [High Volume Email](https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365).

The Allowed Apps list defines which Microsoft Entra applications are authorized to authenticate and send email via OAuth using the specified HVE account. Each HVE account can have up to ten allowed apps assigned. For more information, see [OAuth authentication for High Volume Email](https://learn.microsoft.com/exchange/mail-flow-best-practices/oauth-high-volume-mails-m365).

Changes can take up to 5 minutes to take effect.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-HVEAppAccess -Identity HVEAccount01@tailspintoys.com -AppIds "11111111-1111-1111-1111-111111111111"
```

This example removes the specified application from the Allowed Apps list of the specified HVE account.

### Example 2
```powershell
Remove-HVEAppAccess -Identity HVEAccount01@tailspintoys.com -AppIds "11111111-1111-1111-1111-111111111111","22222222-2222-2222-2222-222222222222"
```

This example removes multiple specified applications from the Allowed Apps list of the specified HVE account.

### Example 3
```powershell
$Apps = (Get-HVEAccountSettings -Identity HVEAccount01@tailspintoys.com).AllowedApps

Remove-HVEAppAccess -Identity HVEAccount01@tailspintoys.com -AppIds $Apps
```

This example removes all existing applications from the Allowed Apps list of the specified HVE account.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the email address of the HVE account you want to modify.

```yaml
Type: MailUserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AppIds

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The AppIds parameter specifies the Microsoft Entra application to remove from the Allowed Apps list of the HVE account. You can specify multiple values separated by commas.

To see the list of currently configured apps for the HVE account, run the following command: `(Get-HVEAccountSettings -Identity HVEAccount01@tailspintoys.com).AllowedApps`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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
