---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-sitemailbox
schema: 2.0.0
title: Get-SiteMailbox
---

# Get-SiteMailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-SiteMailbox cmdlet to view information about site mailboxes. This cmdlet is primarily used by Microsoft SharePoint and Exchange to display information to users in the user interface. However, you mightht find it helpful for discovering information such as the site mailbox's owners, members, and lifecycle status.

Site mailboxes were deprecated in Exchange Online and SharePoint Online in 2017. For more information, see [Deprecation of Site Mailboxes](https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/deprecation-of-site-mailboxes/ba-p/93028).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SiteMailbox [[-Identity] <RecipientIdParameter>]
 [-Anr <String>]
 [-BypassOwnerCheck]
 [-DeletedSiteMailbox]
 [-DomainController <Fqdn>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
If you aren't a member or owner of the site mailbox that you want to view the diagnostics information for, you must use the BypassOwnerCheck parameter when running this cmdlet. If you aren't a member or owner of the site mailbox and you run this cmdlet without using the BypassOwnerCheck parameter, the command fails with an "object not found" error.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SiteMailbox -BypassOwnerCheck -Identity ContentSite
```

This example returns the default information about the site mailbox ContentSite, which includes the site name, when the site mailbox was closed, and the SharePoint URL.

### Example 2
```powershell
Get-SiteMailbox -BypassOwnerCheck -Identity ContentSite | Format-List
```

This example returns the full information about the site mailbox ContentSite.

### Example 3
```powershell
Get-SiteMailbox -BypassOwnerCheck -DeletedSiteMailbox | Remove-Mailbox -Confirm:$false
```

This example queries for site mailboxes that are marked for deletion and removes them from the mailbox database by pipelining the Remove-Mailbox cmdlet.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the identity of the site mailbox. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Anr

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)
- DisplayName
- FirstName
- LastName
- Alias

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassOwnerCheck

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The BypassOwnerCheck parameter is used when the account that's running the command isn't a member or owner of the site mailbox. You don't need to specify a value with this switch.

If you don't use this switch, and you aren't a member or owner of the site mailbox, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeletedSiteMailbox

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DeletedSiteMailbox switch returns site mailboxes that have been marked for pending deletion. You don't need to specify a value with this switch.

When the lifecycle application in SharePoint closes a site mailbox, the site mailbox is retained for the period specified in the lifecycle policy in the closed state. The mailbox can then be reactivated by an end user or by a SharePoint administrator. After the retention period, the name of the Exchange site mailbox housed in the mailbox database is prepended with `MDEL:` to indicate it's marked for deletion. To free storage space and the alias, use the Remove-Mailbox cmdlet to manually remove these site mailboxes from the mailbox database.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -ReadFromDomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. You don't need to specify a value with this switch.

The command: `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest requires the ReadFromDomainController switch. Otherwise, the command might use a global catalog that contains outdated information. Also, you might need to run multiple iterations of the command with the ReadFromDomainController switch to get the information.

By default, the recipient scope is set to the domain that hosts your Exchange servers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
