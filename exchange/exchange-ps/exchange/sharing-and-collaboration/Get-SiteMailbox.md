---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-SiteMailbox
schema: 2.0.0
---

# Get-SiteMailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-SiteMailbox cmdlet to view information about site mailboxes. This cmdlet is primarily used by Microsoft SharePoint and Exchange to display information to users in the user interface. However, you may find it helpful for discovering information such as the site mailbox's owners, members, and lifecycle status.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SiteMailbox [[-Identity] <RecipientIdParameter>] [-Anr <String>] [-BypassOwnerCheck] [-DeletedSiteMailbox]
 [-DomainController <Fqdn>] [-ReadFromDomainController] [-ResultSize <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
If you aren't a member or owner of the site mailbox that you want to view the diagnostics information for, you must use the BypassOwnerCheck parameter when running this cmdlet. If you aren't a member or owner of the site mailbox and you run this cmdlet without using the BypassOwnerCheck parameter, the command fails with an "object not found" error.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-SiteMailbox -BypassOwnerCheck -Identity ContentSite
```

This example returns the default information about the site mailbox ContentSite, which includes the site name, when the site mailbox was closed, and the SharePoint URL.

### -------------------------- Example 2 --------------------------
```
Get-SiteMailbox -BypassOwnerCheck -Identity ContentSite | Format-List
```

This example returns the full information about the site mailbox ContentSite.

### -------------------------- Example 3 --------------------------
```
Get-SiteMailbox -BypassOwnerCheck -DeletedSiteMailbox | Remove-Mailbox -Confirm:$false
```

This example queries for site mailboxes that are marked for deletion and removes them from the mailbox database by pipelining the Remove-Mailbox cmdlet.

## PARAMETERS

### -Anr
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassOwnerCheck
The BypassOwnerCheck parameter is used when the account that's running the command isn't a member or owner of the site mailbox. You don't need to specify a value with this switch.

If you run the command without this parameter, and you aren't a member or owner of the site mailbox, then the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeletedSiteMailbox
This parameter is available only in on-premises Exchange.

The DeletedSiteMailboxswitch returns site mailboxes that have been marked for pending deletion. You don't need to specify a value with this switch.

When the lifecycle application in SharePoint closes a site mailbox, the site mailbox is retained for the period specified in the lifecycle policy in the closed state. The mailbox can then be reactivated by an end user or by a SharePoint administrator. After the retention period, the Exchange site mailbox that's housed in the mailbox database will have its name prepended with MDEL: to indicate that it has been marked for deletion. To free storage space and the alias, use the Remove-Mailbox cmdlet to manually remove these site mailboxes from the mailbox database.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identity of the site mailbox. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Display name

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ReadFromDomainController
The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. If you run the command Set-AdServerSettings -ViewEntireForest $true to include all objects in the forest and you don't use the ReadFromDomainController switch, it's possible that information will be read from a global catalog that has outdated information. When you use the ReadFromDomainController switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch.

By default, the recipient scope is set to the domain that hosts your Exchange servers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/51d2ee4b-4065-4328-86fd-6ca3c9c6912e.aspx)
