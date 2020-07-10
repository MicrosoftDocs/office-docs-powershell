---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-retentionpolicytag
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-RetentionPolicyTag
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-RetentionPolicyTag

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-RetentionPolicyTag cmdlet to retrieve settings for a retention tag.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-RetentionPolicyTag [[-Identity] <RetentionPolicyTagIdParameter>]
 [-DomainController <Fqdn>]
 [-IncludeSystemTags]
 [-Types <ElcFolderType[]>] [<CommonParameters>]
```

### Mailbox
```
Get-RetentionPolicyTag [-Mailbox <MailboxIdParameter>] [-OptionalInMailbox]
 [-DomainController <Fqdn>]
 [-IncludeSystemTags]
 [-Types <ElcFolderType[]>] [<CommonParameters>]
```

## DESCRIPTION
Retention tags are used to apply message retention settings to messages or folders. There are three types of retention tags:

- Retention policy tags

- Default policy tags

- Personal tags

Retention policy tags are applied to default folders such as Inbox and Deleted Items. Personal tags are available to users to tag items and folders. The default policy tag is applied to all items that don't have a tag applied by the user or aren't inherited from the folder they're located in. The Get-RetentionPolicyTag cmdlet displays all the settings for the specified tag.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-RetentionPolicyTag
```

This example returns all retention tags.

### Example 2
```powershell
Get-RetentionPolicyTag -IncludeSystemTags
```

This example returns system tags in addition to personal and default tags.

### Example 3
```powershell
Get-RetentionPolicyTag "Consolidated Messenger"
```

This example returns the settings for the tag Consolidated Messenger.

### Example 4
```powershell
Get-RetentionPolicyTag -Types Inbox,All | Format-Table Name,Type,RetentionEnabled,AgeLimitForRetention,RetentionAction -AutoSize
```

This example returns all retention tags of Inbox and All types and pipes the results to the Format-Table command to display the Name, Type, RetentionEnabled, AgeLimitForRetention and RetentionAction properties.

## PARAMETERS

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the tag.

```yaml
Type: RetentionPolicyTagIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeSystemTags
The IncludeSystemTags switch specifies whether to return any system tags.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter returns the retention tags that are assigned to the retention policy that's applied to the specified mailbox. You can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

This parameter only returns default policy tags (DPTs) and personal tags; it doesn't return retention policy tags.

```yaml
Type: MailboxIdParameter
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OptionalInMailbox
The OptionalInMailbox parameter is used with the Mailbox parameter to return any opt-in retention tags that are assigned to the specified mailbox. You don't need to specify a value with this switch.

An opt-in retention tag is a personal tag that was explicitly assigned to the mailbox with the Set-RetentionPolicyTag -Mailbox -OptionalInMailbox command.

```yaml
Type: SwitchParameter
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Types
The Types parameter specifies the type of retention tag to return. Valid values include:

- Calendar

- Contacts

- DeletedItems

- Drafts

- Inbox

- JunkEmail

- Journal

- Notes

- Outbox

- SentItems

- Tasks

- All

- RssSubscriptions

- ConversationHistory

- Personal

The parameter accepts multiple values separated by a comma.

```yaml
Type: ElcFolderType[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
