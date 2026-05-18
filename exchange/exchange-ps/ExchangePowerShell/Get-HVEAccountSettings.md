---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
external help file:
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-hveaccountsettings
schema: 2.0.0
title: Get-HVEAccountSettings
---

# Get-HVEAccountSettings

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-HVEAccountSettings cmdlet to view the account settings of a High Volume Email (HVE) account.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HVEAccountSettings [-Identity] <MailUserIdParameter> [<CommonParameters>]
```

## DESCRIPTION
An HVE account is a special type of mail user (also known as a mail-enabled user) used to send large amounts of email. For more information, see [High Volume Email](https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-HVEAccountSettings -Identity HVEAccount01@tailspintoys.com
```

This example returns the HVE account settings of the specified HVE account.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the email address of the HVE account you want to view.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
