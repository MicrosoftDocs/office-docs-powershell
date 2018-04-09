---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
title: Get-Recipient
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps || o365scc-ps || eop-ps"
---

# Get-Recipient

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-Recipient cmdlet to view existing recipient objects in your organization. This cmdlet returns all mail-enabled objects (for example, mailboxes, mail users, mail contacts, and distribution groups).

In cloud environments, to return Office 365 groups, you need to use the RecipientTypeDetails parameter with the value GroupMailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Get-Recipient [-Anr <String>] [-AuthenticationType <Managed | Federated>] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PropertySet <All | ControlPanel | ConsoleSmallSet | ConsoleLargeSet | Minimum>] [-ReadFromDomainController]
 [-RecipientType <RecipientType[]>] [-RecipientTypeDetails <RecipientTypeDetails[]>] [-ResultSize <Unlimited>]
 [-SortBy <String>] [-AccountPartition <AccountPartitionIdParameter>] [-Capabilities <MultiValuedProperty>]
 [-Database <DatabaseIdParameter>] [-Properties <String[]>] [-IncludeSoftDeletedRecipients]
 [<CommonParameters>]
```

### Set1
```
Get-Recipient [[-Identity] <RecipientIdParameter>] [-AuthenticationType <Managed | Federated>]
 [-BookmarkDisplayName <String>] [-Credential <PSCredential>] [-DomainController <Fqdn>] [-Filter <String>]
 [-IgnoreDefaultScope] [-IncludeBookmarkObject <$true | $false>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PropertySet <All | ControlPanel | ConsoleSmallSet | ConsoleLargeSet | Minimum>] [-ReadFromDomainController]
 [-RecipientType <RecipientType[]>] [-RecipientTypeDetails <RecipientTypeDetails[]>] [-ResultSize <Unlimited>]
 [-SortBy <String>] [-AccountPartition <AccountPartitionIdParameter>] [-Capabilities <MultiValuedProperty>]
 [-Properties <String[]>] [-IncludeSoftDeletedRecipients] [<CommonParameters>]
```

### Set2
```
Get-Recipient [-AuthenticationType <Managed | Federated>] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PropertySet <All | ControlPanel | ConsoleSmallSet | ConsoleLargeSet | Minimum>] [-ReadFromDomainController]
 [-RecipientPreviewFilter <String>] [-RecipientType <RecipientType[]>]
 [-RecipientTypeDetails <RecipientTypeDetails[]>] [-ResultSize <Unlimited>] [-SortBy <String>]
 [-AccountPartition <AccountPartitionIdParameter>] [-Capabilities <MultiValuedProperty>]
 [-Properties <String[]>] [-IncludeSoftDeletedRecipients] [<CommonParameters>]
```

### Set4
```
Get-Recipient [-AccountPartition <AccountPartitionIdParameter>] [-Anr <String>]
 [-AuthenticationType <Managed | Federated>] [-Capabilities <MultiValuedProperty>] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-Properties <String[]>]
 [-PropertySet <All | ControlPanel | ConsoleSmallSet | ConsoleLargeSet | Minimum>] [-ReadFromDomainController]
 [-RecipientType <RecipientType[]>] [-RecipientTypeDetails <RecipientTypeDetails[]>] [-ResultSize <Unlimited>]
 [-SortBy <String>] [-IncludeSoftDeletedRecipients] [<CommonParameters>]
```

## DESCRIPTION
The Get-Recipient cmdlet may not return all object-specific properties for a recipient. To view the object-specific properties for a recipient, you need to use the corresponding cmdlet based on the object type (for example, Get-Mailbox, Get-MailUser, or Get-DistributionGroup).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-Recipient -ResultSize unlimited
```

This example retrieves as summary list of all recipients in your organization.

### -------------------------- Example 2 --------------------------
```
Get-Recipient -Identity "Marketing Department" | Format-List
```

This example returns detailed information for the recipient named Marketing Department.

### -------------------------- Example 3 --------------------------
```
Get-Recipient -RecipientType MailContact -SortBy Office | Format-Table -Auto Office,Name
```

This example retrieves information about all the mail contacts in your organization and sorts them by office.

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
Parameter Sets: Set3, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthenticationType
This parameter is available only in the cloud-based service.

The AuthenticationType parameter specifies the recipient by authentication type. Use one of the following values:

- Federated

- Managed

```yaml
Type: Managed | Federated
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookmarkDisplayName
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
This parameter is available only in on-premises Exchange.

The Credential parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

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

### -Filter
The Filter parameter indicates the OPath filter used to filter recipients.

For more information about the filterable properties, see Filterable properties for the -Filter parameter (https://technet.microsoft.com/library/bb738155.aspx).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the recipient object that you want to view. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IgnoreDefaultScope
This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeBookmarkObject
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertySet
This parameter is reserved for internal Microsoft use.

```yaml
Type: All | ControlPanel | ConsoleSmallSet | ConsoleLargeSet | Minimum
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. If you run the command Set-AdServerSettings -ViewEntireForest $true to include all objects in the forest and you don't use the ReadFromDomainController switch, it's possible that information will be read from a global catalog that has outdated information. When you use the ReadFromDomainController switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch.

By default, the recipient scope is set to the domain that hosts your Exchange servers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientPreviewFilter
The RecipientPreviewFilter parameter specifies a recipient filter that would define the recipients returned by this command. You can create a custom recipient filter for a dynamic distribution group, an address list, or an email address policy. To verify that the recipient filter you specified will return the recipients you want, you can pass the OPATH filter specified in the RecipientFilter property for that dynamic distribution group, address list, or email address policy to the RecipientPreviewFilter parameter and preview the list of recipients.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientType
The RecipientType parameter filters the results by the specified recipient type. Valid values are:

- DynamicDistributionGroup

- MailContact

- MailNonUniversalGroup

- MailUniversalDistributionGroup

- MailUniversalSecurityGroup

- MailUser

- PublicFolder

- UserMailbox

You can specify multiple values separated by commas.

```yaml
Type: RecipientType[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientTypeDetails
The RecipientTypeDetails parameter filters the results by the specified recipient subtype. Valid values are:

- DiscoveryMailbox

- DynamicDistributionGroup

- EquipmentMailbox

- GroupMailbox

- GuestMailUser

- LegacyMailbox

- LinkedMailbox

- LinkedRoomMailbox

- MailContact

- MailForestContact

- MailNonUniversalGroup

- MailUniversalDistributionGroup

- MailUniversalSecurityGroup

- MailUser

- PublicFolder

- PublicFolderMailbox

- RemoteEquipmentMailbox

- RemoteRoomMailbox

- RemoteSharedMailbox

- RemoteTeamMailbox

- RemoteUserMailbox

- RoomList

- RoomMailbox

- SchedulingMailbox

- SharedMailbox

- TeamMailbox

- UserMailbox

You can specify multiple values separated by commas.

The value of the RecipientType parameter affects the values that you can use for this parameter. For example, if you use the RecipientType value MailContact, you can't use the value UserMailbox for this parameter. You'll receive the error: None of the specified RecipientTypeDetails are included in any specified recipient type.

```yaml
Type: RecipientTypeDetails[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName

- Alias

- City

- FirstName

- LastName

- Office

- ServerLegacyDN

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountPartition
This parameter is reserved for internal Microsoft use.

```yaml
Type: AccountPartitionIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Capabilities
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
This parameter is available only in on-premises Exchange.

The Database parameter specifies a mailbox database. Use this parameter to return all recipients stored on a specific mailbox database. Use the mailbox database Name property as the value for this parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Properties
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeSoftDeletedRecipients
The IncludeSoftDeletedRecipients switch specifies whether to include soft deleted recipients in the results. You don't need to specify a value with this switch.

This switch is required to return soft-deleted recipients.

Soft-deleted recipients are deleted recipients that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/2ce6250f-0ad3-4b29-870c-e1d6e1e154bc.aspx)
