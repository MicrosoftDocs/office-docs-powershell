---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailboxauditbypassassociation
schema: 2.0.0
title: Get-MailboxAuditBypassAssociation
---

# Get-MailboxAuditBypassAssociation

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Get-MailboxAuditBypassAssociation cmdlet to retrieve information about the AuditBypassEnabled property value for user accounts (on-premises Exchange and the cloud) and computer accounts (on-premises Exchange only). You use the [Set-MailboxAuditBypassAssociation](https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxauditbypassassociation) cmdlet to enable this property to bypass mailbox audit logging.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailboxAuditBypassAssociation [[-Identity] <MailboxAuditBypassAssociationIdParameter>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
When you configure a user or computer account to bypass mailbox audit logging, access or actions taken by the user account or computer account to any mailbox isn't logged. By bypassing trusted user accounts or computer accounts that need to access mailboxes frequently, you can reduce the noise in mailbox audit logs.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxAuditBypassAssociation -ResultSize unlimited | Format-Table Name,AuditBypassEnabled
```

This example returns all accounts and whether they are configured or not configured for mailbox audit logging bypass.

### Example 2
```powershell
Get-MailboxAuditBypassAssociation -Identity "Svc-MyApplication"
```

This example returns the status of the AuditBypassEnabled property for the Svc-MyApplication account.

### Example 3
```powershell
$MBX = Get-MailboxAuditBypassAssociation -ResultSize unlimited

$MBX | where {$_.AuditBypassEnabled -eq $true} | Format-Table Name,AuditBypassEnabled
```

This example returns all accounts that are configured for mailbox audit logging bypass.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the user account or computer account where you want to view the value of the AuditBypassEnabled property.

```yaml
Type: MailboxAuditBypassAssociationIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
