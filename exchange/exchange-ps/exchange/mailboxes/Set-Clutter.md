---
external help file: Microsoft.Exchange.Management-Help.xml
applicable: Exchange Online
title: Set-Clutter
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Set-Clutter

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-Clutter cmdlet to configure Clutter settings for mailboxes in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Set-Clutter -Identity <MailboxIdParameter> [-Enable <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-Clutter -Identity "Alexander Martinez" -Enable $false
```

This example disables Clutter for the user Alexander Martinez.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name>\\\<account name>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enable
The Enable parameter specifies whether to enable or disable Clutter for the mailbox. Valid values are:

- $true: Clutter is enabled for the mailbox. This is the default value.

- $false: Clutter is disabled for the mailbox.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online version](https://technet.microsoft.com/library/0c91b858-5bbe-4d2f-abff-d1503bcd6864.aspx)
