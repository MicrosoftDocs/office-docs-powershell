---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-RetentionPolicyTag

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-RetentionPolicyTag cmdlet to retrieve settings for a retention tag.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-RetentionPolicyTag cmdlet to retrieve settings for a retention tag.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-RetentionPolicyTag [[-Identity] <RetentionPolicyTagIdParameter>] [-DomainController <Fqdn>]
 [-IncludeSystemTags] [-Organization <OrganizationIdParameter>] [-Types <ElcFolderType[]>] [<CommonParameters>]
```

### Set2
```
Get-RetentionPolicyTag [-DomainController <Fqdn>] [-IncludeSystemTags] [-Mailbox <MailboxIdParameter>]
 [-OptionalInMailbox] [-Organization <OrganizationIdParameter>] [-Types <ElcFolderType[]>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

Retention tags are used to apply message retention settings to messages or folders. There are three types of retention tags:

- Retention policy tags

- Default policy tags

- Personal tags

Retention policy tags are applied to default folders such as Inbox and Deleted Items. Personal tags are available to users to tag items and folders. The default policy tag is applied to all items that don't have a tag applied by the user or aren't inherited from the folder they're located in. The Get-RetentionPolicyTag cmdlet displays all the settings for the specified tag.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Messaging records management" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

Retention tags are used to apply message retention settings to messages or folders. There are three types of retention tags:

- Retention policy tags

- Default policy tags

- Personal tags

Retention policy tags are applied to default folders such as Inbox and Deleted Items. Personal tags are available to users to tag items and folders. The default policy tag is applied to all items that don't have a tag applied by the user or aren't inherited from the folder they're located in. The Get-RetentionPolicyTag cmdlet displays all the settings for the specified tag.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Messaging records management" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online

Retention tags are used to apply message retention settings to messages or folders. There are three types of retention tags:

- Retention policy tags

- Default policy tags

- Personal tags

Retention policy tags are applied to default folders such as Inbox and Deleted Items. Personal tags are available to users to tag items and folders. The default policy tag is applied to all items that don't have a tag applied by the user or aren't inherited from the folder they're located in. The Get-RetentionPolicyTag cmdlet displays all the settings for the specified tag.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-RetentionPolicyTag
```

This example returns all retention tags.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-RetentionPolicyTag
```

This example returns all retention tags.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-RetentionPolicyTag
```

This example returns all retention tags.

### Example 1 -------------------------- (Exchange Online)
```
Get-RetentionPolicyTag
```

This example returns all retention tags.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-RetentionPolicyTag -IncludeSystemTags
```

This example returns system tags in addition to personal and default tags.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-RetentionPolicyTag -IncludeSystemTags
```

This example returns system tags in addition to personal and default tags.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-RetentionPolicyTag -IncludeSystemTags
```

This example returns system tags in addition to personal and default tags.

### Example 2 -------------------------- (Exchange Online)
```
Get-RetentionPolicyTag -IncludeSystemTags
```

This example returns system tags in addition to personal and default tags.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-RetentionPolicyTag "Consolidated Messenger"
```

This example returns the settings for the tag Consolidated Messenger.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-RetentionPolicyTag "Consolidated Messenger"
```

This example returns the settings for the tag Consolidated Messenger.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-RetentionPolicyTag "Consolidated Messenger"
```

This example returns the settings for the tag Consolidated Messenger.

### Example 3 -------------------------- (Exchange Online)
```
Get-RetentionPolicyTag "Consolidated Messenger"
```

This example returns the settings for the tag Consolidated Messenger.

### Example 4 -------------------------- (Exchange Server 2010)
```
Get-RetentionPolicyTag -Types Inbox,All | Format-Table Name,Type,RetentionEnabled,AgeLimitForRetention,RetentionAction -AutoSize
```

This example returns all retention tags of Inbox and All types and pipes the results to the Format-Table command to display the Name, Type, RetentionEnabled, AgeLimitForRetention, and RetentionAction properties.

### Example 4 -------------------------- (Exchange Server 2013)
```
Get-RetentionPolicyTag -Types Inbox,All | Format-Table Name,Type,RetentionEnabled,AgeLimitForRetention,RetentionAction -AutoSize
```

This example returns all retention tags of Inbox and All types and pipes the results to the Format-Table command to display the Name, Type, RetentionEnabled, AgeLimitForRetention, and RetentionAction properties.

### Example 4 -------------------------- (Exchange Server 2016)
```
Get-RetentionPolicyTag -Types Inbox,All | Format-Table Name,Type,RetentionEnabled,AgeLimitForRetention,RetentionAction -AutoSize
```

This example returns all retention tags of Inbox and All types and pipes the results to the Format-Table command to display the Name, Type, RetentionEnabled, AgeLimitForRetention, and RetentionAction properties.

### Example 4 -------------------------- (Exchange Online)
```
Get-RetentionPolicyTag -Types Inbox,All | Format-Table Name,Type,RetentionEnabled,AgeLimitForRetention,RetentionAction -AutoSize
```

This example returns all retention tags of Inbox and All types and pipes the results to the Format-Table command to display the Name, Type, RetentionEnabled, AgeLimitForRetention, and RetentionAction properties.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter isn't available in this release.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OptionalInMailbox
The OptionalInMailbox parameter isn't available in this release.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/5cddcfea-6f67-4481-9c00-5b13c11d5ced.aspx)

