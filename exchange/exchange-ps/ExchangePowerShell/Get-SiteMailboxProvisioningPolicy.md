---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-sitemailboxprovisioningpolicy
schema: 2.0.0
title: Get-SiteMailboxProvisioningPolicy
---

# Get-SiteMailboxProvisioningPolicy

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-SiteMailboxProvisioningPolicy cmdlet to view site mailbox provisioning policies.

Site mailboxes were deprecated in Exchange Online and SharePoint Online in 2017. For more information, see [Deprecation of Site Mailboxes](https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/deprecation-of-site-mailboxes/ba-p/93028).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SiteMailboxProvisioningPolicy [[-Identity] <MailboxPolicyIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
Site mailboxes allow access to both Microsoft SharePoint documents and Exchange email using the same client interface. Site mailbox provisioning policies apply settings to new site mailboxes that you create. You can create multiple site mailbox provisioning policies, but only the default policy is followed when users create site mailboxes. The default site mailbox provisioning policy is named Default.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SiteMailboxProvisioningPolicy
```

This example returns a summary list of all site mailbox provisioning policies in your organization.

### Example 2
```powershell
Get-SiteMailboxProvisioningPolicy -Identity SM_NewPolicy | Format-List
```

This example returns detailed information about the site mailbox provisioning policy named SM\_NewPolicy

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the site mailbox provisioning policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
