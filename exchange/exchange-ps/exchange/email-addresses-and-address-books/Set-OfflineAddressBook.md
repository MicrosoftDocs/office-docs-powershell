---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-OfflineAddressBook
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Set-OfflineAddressBook

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-OfflineAddressBook cmdlet to modify offline address book (OAB) settings.

By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, Manage role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-OfflineAddressBook [-Identity] <OfflineAddressBookIdParameter>
 [-AddressLists <AddressBookBaseIdParameter[]>] [-ApplyMandatoryProperties]
 [-ConfiguredAttributes <MultiValuedProperty>] [-Confirm] [-DiffRetentionPeriod <Unlimited>]
 [-DomainController <Fqdn>] [-GlobalWebDistributionEnabled <$true | $false>] [-IsDefault <$true | $false>]
 [-MaxBinaryPropertySize <Int32>] [-MaxMultivaluedBinaryPropertySize <Int32>]
 [-MaxMultivaluedStringPropertySize <Int32>] [-MaxStringPropertySize <Int32>] [-Name <String>]
 [-PublicFolderDistributionEnabled <$true | $false>] [-Schedule <Schedule>] [-UseDefaultAttributes]
 [-Versions <MultiValuedProperty>] [-VirtualDirectories <VirtualDirectoryIdParameter[]>] [-WhatIf]
 [-GeneratingMailbox <MailboxIdParameter>] [-ShadowMailboxDistributionEnabled <$true | $false>]
 [-FullOabDownloadPreventionThreshold <Int32>] [-HttpHomeMdbLastProcessedBucket <Int32>] [-UpgradeFromE14]
 [-ZipOabFilesBeforeUploading <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-OfflineAddressBook -Identity "Default Offline Address Book" -VirtualDirectories $null -GlobalWebDistributionEnabled $true
```

This example configures the OAB named Default Offline Address Book to be available for download requests from all OAB virtual directories in the organization.

### -------------------------- Example 2 --------------------------
```
Set-OfflineAddressBook -Identity "\Default Offline Address Book" -GeneratingMailbox OABGen2
```

This example changes the organization mailbox that's responsible for generating the OAB.

## PARAMETERS

### -Identity
The Identity parameter specifies the OAB that you want to modify. You can use any value that uniquely identifies the OAB. For example:

- Name or \\Name

- Distinguished name (DN)

- GUID

```yaml
Type: OfflineAddressBookIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddressLists
The AddressLists parameter specifies the address lists or global address lists that are included in the OAB. You can use any value that uniquely identifies the address list. For example:

- Name

- Distinguished name (DN)

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can find the identify values of address lists and global address lists by using the Get-AddressList and Get-GlobalAddressList cmdlets.

```yaml
Type: AddressBookBaseIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyMandatoryProperties
The ApplyMandatoryPropertiesswitch specifies whether to update the mandatory properties of a legacy OAB. You don't need to specify a value with this switch.

This switch was used in coexistence environments when an OAB was migrated from Exchange 2003.

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

### -ConfiguredAttributes
The ConfiguredAttributes parameter specifies the recipient MAPI propertiesthat are available in the OAB. This parameter uses the syntax: "\<Name1\>,\<Type1\>","\<Name2\>,\<Type2\>"... where \<Name\> is the name of the MAPI property (for example, MobileTelephoneNumber), and \<Type\> is the value ANR (ambiguous name resolution), Value, or Indicator.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

To reset this parameter back to the default values, use the UseDefaultAttributes switch.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiffRetentionPeriod
The DiffRetentionPeriod parameter specifies the number of days that the OAB difference files are stored on the server. Valid values are integers from 7 to 1825, or the value unlimited. The default value is 30.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalWebDistributionEnabled
This parameter is available only in on-premises Exchange.

The GlobalWebDistributionEnabled parameter specifies whether all OAB virtual directories in the organization can accept requests to download the OAB. These locations are advertised by the Autodiscover service. Valid values are:

- $true: Any OAB virtual directory in the organization can accept requests to download the OAB. You can't use this setting with the VirtualDirectories parameter.

- $false: Only the OAB virtual directories that are specified by the VirtualDirectories parameter accept requests to download the OAB. This is the default value.

In Exchange 2013 CU7 or later, we recommend that you use the value $true for this parameter. The Client Access services on any Mailbox server can proxy incoming OAB download requests to the correct location.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault
The IsDefault parameter specifies whether the OAB is used by all mailboxes and mailbox databases that don't have an OAB specified. Valid values are:

- $true: The OAB is the default OAB.

- $false: The OAB is isn't the default OAB.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxBinaryPropertySize
This parameter is available only in on-premises Exchange.

The MaxBinaryPropertySize parameter specifies the maximum size in bytes for binary attributes in the OAB before they're truncated. Valid values are integers from 0 to 999999999. The default value is 65536.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxMultivaluedBinaryPropertySize
This parameter is available only in on-premises Exchange.

The MaxMultivaluedBinaryPropertySize parameter specifies the maximum size in bytes for multivalued binary attributes in the OAB before they're truncated. Valid values are integers from 0 to 999999999. The default value is 65536 (64 kilobytes).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxMultivaluedStringPropertySize
This parameter is available only in on-premises Exchange.

The MaxMultivaluedStringPropertySize parameter specifies the maximum size for multivalued string attributes in the OAB before they're truncated. Valid values are integers from 0 to 999999999. The default value is 65536 (64 kilobytes).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxStringPropertySize
This parameter is available only in on-premises Exchange.

The MaxStringPropertySize parameter specifies the maximum size in bytes for string attributes before they're truncated. Valid values are integers from 0 to 999999999. The default value is 3400.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name of the OAB. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderDistributionEnabled
The PublicFolderDistributionEnabled parameter specifies whether the OAB is to be distributed via public folders. Setting the PublicFolderDistributionEnabled parameter to a value of $true sets the OAB to be distributed via public folders. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Schedule
This parameter is available only in on-premises Exchange.

Note: In Exchange 2013 or later, this parameter is no longer responsible for the OAB generation schedule. For more information, see Change the offline address book generation schedule (https://technet.microsoft.com/library/bb124719.aspx).

The Schedule parameter specifies the interval for generating the OAB in Exchange 2010 or earlier.

You can use the following values for the start and end days:

- Full name of the day

- Abbreviated name of the day

- Integer from 0 through 6, where 0 = Sunday

The start time and end time must be at least 15 minutes apart. Minutes will be rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval.

The following are examples:

- "Sun.11:30 PM-Mon.1:30 AM"

- 6.22:00-6.22:15 (The assistant will run from Saturday at 10:00 PM until Saturday at 10:15 PM.)

- "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (The assistant will run on Monday and Wednesday mornings from 4:30 until 5:30.)

- "Sun.1:15 AM-Monday.23:00"

Note: In Office 365, the read only value of this property is displayed in Coordinated Universal Time (UTC).

```yaml
Type: Schedule
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultAttributes
The UseDefaultAttributesswitch specifies whether to revert the recipient MAPI properties that are available in the OAB to the default list. You don't need to specify a value with this switch.

You can use this switch to undo changes that you've made to the default list by using the ConfiguredAttributes parameter.

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

### -Versions
The Versions parameter specifies the OAB versions that are generated for client download. In Exchange 2013 or later, the default and only supported value is Version4 (Version3 and Version2 require public folder distribution).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VirtualDirectories
This parameter is available only in on-premises Exchange.

The VirtualDirectories parameter specifies the OAB virtual directories that accept requests to download the OAB. These locations are advertised in the Autodiscover service.

You can use any value that uniquely identifies the virtual directory. For example:

- Name or \<Server\>\\Name

- Distinguished name (DN)

- GUID

The Name value uses the syntax "\<VirtualDirectoryName\> (\<WebsiteName\>)" from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax \<VirtualDirectoryName\>\*.

The default value of this parameter is the Client Access services (frontend) and backend OAB virtual directories on the Mailbox server that holds the OAB generation mailbox (the GeneratingMailbox parameter or SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}) when you created the OAB (for example, Mailbox01\\OAB (Default Web Site),Mailbox01\\OAB (Exchange Back End).

To use this parameter, the value of the GlobalWebDistributionEnabled parameter must be $false.

In Exchange 2013 CU7 or later, we recommend that you set this parameter to $null, and then set the GlobalWebDistributionEnabled parameter to $true, because the Client Access services on any Mailbox server can proxy incoming OAB download requests to the correct location.

```yaml
Type: VirtualDirectoryIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GeneratingMailbox
This parameter is available only in on-premises Exchange.

The GeneratingMailbox parameter specifies the arbitration mailbox where the OAB is generated. Specifically, the arbitration mailbox must contain the OrganizationCapabilityOABGen value for the PersistedCapability property. An arbitration mailbox with this capability is also known as an organization mailbox. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

The default value for this parameter is the organization mailbox named SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}.

A single organization mailbox can generate multiple OABs (you can use the same value for this parameter in the settings of multiple OABs), but in Exchange 2013 CU5 or later, an OAB can only be generated by a single organization mailbox (this parameter doesn't accept multiple values). To have a read only copy of the OAB (also known as a shadow copy) available in other organization mailboxes, use the ShadowMailboxDistributionEnabled parameter.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShadowMailboxDistributionEnabled
This parameter is available only in on-premises Exchange.

The ShadowMailboxDistributionEnabled parameter specifies whether a read only copy of the OAB (also known as a shadow copy) is distributed to all other OAB generation mailboxes (also known as organization mailboxes). This allows additional Mailbox servers to be endpoints for requests to download the OAB, which can help prevent users from downloading the OAB across slow WAN links. Valid values are:

- $true: The OAB is distributed to all other organization mailboxes.

- $false: The OAB is isn't distributed to other organization mailboxes. This is the default value.

The value of this parameter is only meaningful if you have multiple organization mailboxes, and is only beneficial in Exchange organizations that have multiple Active Directory sites.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FullOabDownloadPreventionThreshold
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpHomeMdbLastProcessedBucket
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpgradeFromE14
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ZipOabFilesBeforeUploading
The ZipOabFilesBeforeUploading specifies whether to use ZIP file compression on the OAB files before uploading them to the server. Valid values are:

- $true: ZIP the OAB files.

- $false: Don't ZIP the OAB files. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/1221dda7-1923-4fec-a756-7540e18ae9f9.aspx)
