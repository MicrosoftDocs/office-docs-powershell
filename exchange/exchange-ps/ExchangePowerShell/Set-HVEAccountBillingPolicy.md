---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
external help file:
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-hveaccountbillingpolicy
schema: 2.0.0
title: Set-HVEAccountBillingPolicy
---

# Set-HVEAccountBillingPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-HVEAccountBillingPolicy cmdlet to modify the billing policy mapping for a specified High Volume Email (HVE) account.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).
## SYNTAX

```
Set-HVEAccountBillingPolicy [-Identity] <MailUserIdParameter> -BillingPolicyId <String>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
An HVE account is a special type of mail user (also known as a mail-enabled user) used to send large amounts of email. For more information, see [High Volume Email](https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-HVEAccountBillingPolicy -Identity " HVEAccount01@tailspintoys.com" -BillingPolicyId "11111111-1111-1111-1111-111111111111"
```

This example assigns the specified billing policy to the specified HVE account.

### Example 2
```powershell
Set-HVEAccountBillingPolicy -Identity " HVEAccount01@tailspintoys.com" -BillingPolicyId ""
```

This example removes the billing policy mapping from the specified HVE account.

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

### -BillingPolicyId

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The BillingPolicyId parameter specified the GUID of the billing policy to assign to the HVE account.

To view the available billing policies, run the following command: `Get-BillingPolicy -ResourceType HVE`.

To remove a previously assigned billing policy, use the value `""`.

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
