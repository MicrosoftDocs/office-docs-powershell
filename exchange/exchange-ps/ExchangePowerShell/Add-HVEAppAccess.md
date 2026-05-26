---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
external help file:
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/add-hveappaccess
schema: 2.0.0
title: Add-HVEAppAccess
---

# Add-HVEAppAccess

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Add-HVEAppAccess cmdlet to add applications to the Allowed Apps list of a High Volume Email (HVE) account.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Add-HVEAppAccess [-Identity] <MailUserIdParameter> -AppIds <MultiValuedProperty>
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
Add-HVEAppAccess -Identity HVEAccount01@tailspintoys.com -AppIds "11111111-1111-1111-1111-111111111111"
```

This example adds the specified application to the Allowed Apps list of the specified HVE account.

### Example 2
```powershell
Add-HVEAppAccess -Identity HVEAccount01@tailspintoys.com -AppIds "11111111-1111-1111-1111-111111111111","22222222-2222-2222-2222-222222222222"
```

This example adds multiple specified applications to the Allowed Apps list of the specified HVE account.

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

The AppIds parameter specifies the Microsoft Entra application to add to the Allowed Apps list of the HVE account.

A valid value for this parameter is the **Object ID** (GUID) value of the application from the **Enterprise applications \| All Applications** page in the Microsoft Azure Portal. You can specify a maximum of 10 GUID values separated by commas.

**Note**: Don't use **Application (client) ID** (GUID) values from the **App Registrations** page in the Microsoft Azure Portal or other GUID values. Values that aren't valid **Object ID** values result in validation errors. For more information about applications, see [Authenticate an IMAP, POP or SMTP connection using OAuth](https://learn.microsoft.com/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth?source=recommendations#use-client-credentials-grant-flow-to-authenticate-smtp-imap-and-pop-connections).

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
