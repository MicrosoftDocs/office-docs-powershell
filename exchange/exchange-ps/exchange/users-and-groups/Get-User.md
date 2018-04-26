---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
title: Get-User
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps || o365scc-ps || eop-ps"
---

# Get-User

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-User cmdlet to view existing user objects in your organization. This cmdlet returns all objects that have user accounts (for example, user mailboxes, mail users, and user accounts).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-User [-Anr <String>] [-Arbitration] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-IgnoreDefaultScope] [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController] [-RecipientTypeDetails <RecipientTypeDetails[]>] 
 [-ResultSize <Unlimited>] [-Sortby <String>] [-AuditLog]
 [-PublicFolder] [-AuxAuditLog] [-SupervisoryReviewPolicy] [<CommonParameters>]
```

### Set1
```
Get-User [[-Identity] <UserIdParameter>] [-Arbitration] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-IgnoreDefaultScope] [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController] [-RecipientTypeDetails <RecipientTypeDetails[]>] 
 [-ResultSize <Unlimited>] [-Sortby <String>] [-AuditLog]
 [-PublicFolder] [-AuxAuditLog] [-SupervisoryReviewPolicy] [<CommonParameters>]
```

## DESCRIPTION
The Get-User cmdlet returns no mail-related properties for mailboxes or mail users. To view the mail-related properties for a user, you need to use the corresponding cmdlet based on the object type (for example, Get-Mailbox or Get-MailUser).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-User -ResultSize unlimited
```

This example returns a summary list of all users in your organization.

### -------------------------- Example 2 --------------------------
```
Get-User -Identity "Coy Damon" | Format-List
```

This example returns detailed information for the user named Coy Damon.

### -------------------------- Example 3 --------------------------
```
Get-User -OrganizationalUnit "Marketing"
```

This example retrieves information about users in the Marketing OU.

### -------------------------- Example 4 --------------------------
```
Get-User -Filter "Title -like '*Manager'"
```

This example uses the Filter parameter to retrieve information about all users that have the word Manager at the end of their title.

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
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Arbitration
This parameter is available only in on-premises Exchange.

The Arbitration switch filters the results by arbitration mailboxes. You don't need to specify a value with this switch.

Arbitration mailboxes are system mailbox that are used for storing different types of system data and for managing messaging approval workflow.

Notes:

- If you don't use this switch, the command can't find arbitration mailboxes.

- To return arbitration mailboxes that are used to store audit log settings or data, you need to use the AuditLog or AuxAuditLog switches instead of the Arbitration switch.

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
The Identity parameter the user that you want to view. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: UserIdParameter
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

### -RecipientTypeDetails
The RecipientTypeDetails parameter filters the results by the specified user subtype. Valid values are:

- DisabledUser

- DiscoveryMailbox

- EquipmentMailbox

- GuestMailUser

- LegacyMailbox

- LinkedMailbox

- LinkedUser

- MailUser

- PublicFolderMailbox

- RemoteEquipmentMailbox

- RemoteRoomMailbox

- RemoteSharedMailbox

- RemoteTeamMailbox

- RemoteUserMailbox

- RoomMailbox

- SchedulingMailbox

- SharedMailbox

- TeamMailbox

- User

- UserMailbox

You can specify multiple values separated by commas.

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

### -Sortby
The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName

- City

- FirstName

- LastName

- Office

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

### -AuditLog
This parameter is available only in on-premises Exchange.

The AuditLog switch filters the results by arbitration mailboxes that are used to store audit log settings. You don't need to specify a value with this switch.

Notes: 

- If you don't use this switch, the command can't find this type of arbitration mailbox.

- The Arbitration switch doesn't return this type of arbitration mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder
The PublicFolder switch specifies that the user object for which you're executing the command is a public folder mailbox. Public folder mailboxes are specially designed mailboxes to store the hierarchy and content of public folders. This switch is required to retrieve information for a public folder mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sortby
The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName

- City

- FirstName

- LastName

- Office

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

### -AuxAuditLog
This parameter is available only in on-premises Exchange.

The AuxAuditLog switch filters the results by arbitration mailboxes that are used to store audit log data. You don't need to specify a value with this switch.

Notes: 

- If you don't use this switch, the command can't find this type of arbitration mailbox.

- The Arbitration switch doesn't return this type of arbitration mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupervisoryReviewPolicy
The SupervisoryReviewPolicy switch specifies whether to return mailboxes that are subject to supervisory review policies. You don't need to specify a value with this switch.

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

[Online Version](https://technet.microsoft.com/library/2a33c9e6-33da-438c-912d-28ce3f4c9afb.aspx)
