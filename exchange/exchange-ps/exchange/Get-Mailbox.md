---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-Mailbox

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-Mailbox cmdlet to view mailbox objects and attributes, populate property pages, or supply mailbox information to other tasks.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-Mailbox cmdlet to view mailbox objects and attributes, populate property pages, or supply mailbox information to other tasks.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set5
```
Get-Mailbox [-Anr <String>] [-Arbitration] [-Archive] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-IgnoreDefaultScope] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController]
 [-RecipientTypeDetails <RecipientTypeDetails[]>] [-RemoteArchive] [-ResultSize <Unlimited>] [-SortBy <String>]
 [-InactiveMailboxOnly] [-IncludeInactiveMailbox] [-Monitoring] [-PublicFolder] [-SoftDeletedMailbox]
 [-AuditLog] [-AuxAuditLog] [-GroupMailbox] [-Migration] [-SupervisoryReviewPolicy] [<CommonParameters>]
```

### Set4
```
Get-Mailbox [-Arbitration] [-Archive] [-Credential <PSCredential>] [-Database <DatabaseIdParameter>]
 [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController]
 [-RecipientTypeDetails <RecipientTypeDetails[]>] [-RemoteArchive] [-ResultSize <Unlimited>] [-SortBy <String>]
 [-InactiveMailboxOnly] [-IncludeInactiveMailbox] [-Monitoring] [-PublicFolder] [-SoftDeletedMailbox]
 [-AuditLog] [-AuxAuditLog] [-GroupMailbox] [-Migration] [-SupervisoryReviewPolicy] [<CommonParameters>]
```

### Set1
```
Get-Mailbox [[-Identity] <MailboxIdParameter>] [-Arbitration] [-Archive] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController]
 [-RecipientTypeDetails <RecipientTypeDetails[]>] [-RemoteArchive] [-ResultSize <Unlimited>] [-SortBy <String>]
 [-InactiveMailboxOnly] [-IncludeInactiveMailbox] [-Monitoring] [-PublicFolder] [-SoftDeletedMailbox]
 [-AuditLog] [-AuxAuditLog] [-GroupMailbox] [-Migration] [-SupervisoryReviewPolicy] [<CommonParameters>]
```

### Set2
```
Get-Mailbox [-Arbitration] [-Archive] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-IgnoreDefaultScope] [-MailboxPlan <MailboxPlanIdParameter>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ReadFromDomainController] [-RecipientTypeDetails <RecipientTypeDetails[]>] [-RemoteArchive]
 [-ResultSize <Unlimited>] [-SortBy <String>] [-InactiveMailboxOnly] [-IncludeInactiveMailbox] [-Monitoring]
 [-PublicFolder] [-SoftDeletedMailbox] [-AuditLog] [-AuxAuditLog] [-GroupMailbox] [-Migration]
 [-SupervisoryReviewPolicy] [<CommonParameters>]
```

### Set3
```
Get-Mailbox [-Arbitration] [-Archive] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-IgnoreDefaultScope] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController]
 [-RecipientTypeDetails <RecipientTypeDetails[]>] [-RemoteArchive] [-ResultSize <Unlimited>]
 [-Server <ServerIdParameter>] [-SortBy <String>] [-InactiveMailboxOnly] [-IncludeInactiveMailbox]
 [-Monitoring] [-PublicFolder] [-SoftDeletedMailbox] [-AuditLog] [-AuxAuditLog] [-GroupMailbox] [-Migration]
 [-SupervisoryReviewPolicy] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-Mailbox cmdlet retrieves the attributes and objects for a mailbox. No parameters are required. If the cmdlet is used without a parameter, all mailboxes in the organization are listed.

To accurately evaluate the current storage quota status using the Get-Mailbox cmdlet, you must look at the UseDatabaseQuotaDefaults property in addition to the ProhibitSendQuota, ProhibitSendReceiveQuota, and IssueWarningQuota properties. A value of True for the UseDatabaseQuotaDefaults property means that the per-mailbox settings are ignored and the mailbox database limits are used. If this property is set to True and the ProhibitSendQuota, ProhibitSendReceiveQuota, and IssueWarningQuota properties are set to unlimited, the mailbox doesn't have unlimited size. Instead, you must reference the mailbox database storage limits to see what the limits for the mailbox are. A value of False for the UseDatabaseQuotaDefaults property means that the per-mailbox settings are used.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Recipient Provisioning Permissions" section in the Mailbox Permissions topic.

!!! Exchange Server 2013

The Get-Mailbox cmdlet retrieves the attributes and properties for a mailbox. No parameters are required.

To accurately evaluate the current storage quota status using the Get-Mailbox cmdlet, you must look at the UseDatabaseQuotaDefaults property in addition to the ProhibitSendQuota, ProhibitSendReceiveQuota, and IssueWarningQuota properties. A value of True for the UseDatabaseQuotaDefaults property means that the per-mailbox settings are ignored and the mailbox database limits are used. If this property is set to True and the ProhibitSendQuota, ProhibitSendReceiveQuota, and IssueWarningQuota properties are set to unlimited, the mailbox doesn't have unlimited size. Instead, you must reference the mailbox database storage limits to see what the limits for the mailbox are. A value of False for the UseDatabaseQuotaDefaults property means that the per-mailbox settings are used.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Recipient Provisioning Permissions" section in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

When you use the Get-Mailbox cmdlet in on-premises Exchange environments to view the quota settings for a mailbox, you first need to check the value of the UseDatabaseQuotaDefaults property. The value True means per-mailbox quota settings are ignored, and you need to use the Get-MailboxDatabase cmdlet to see the actual values. If the UseDatabaseQuotaDefaults property is False, the per-mailbox quota settings are used, so what you see with the Get-Mailbox cmdlet are the actual quota values for the mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-Mailbox -ResultSize unlimited
```

This example returns a list of all the mailboxes in your organization.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-Mailbox -ResultSize unlimited
```

This example returns a summary list of all the mailboxes in your organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-Mailbox -ResultSize unlimited
```

This example returns a summary list of all the mailboxes in your organization.

### Example 1 -------------------------- (Exchange Online)
```
Get-Mailbox -ResultSize unlimited
```

This example returns a summary list of all the mailboxes in your organization.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-Mailbox -OrganizationalUnit Users
```

This example returns a list of all the mailboxes in your organization in the Users OU.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-Mailbox -OrganizationalUnit Users
```

This example returns a list of all the mailboxes in your organization in the Users OU.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-Mailbox -OrganizationalUnit Users
```

This example returns a list of all the mailboxes in your organization in the Users OU.

### Example 2 -------------------------- (Exchange Online)
```
Get-Mailbox -OrganizationalUnit Users
```

This example returns a list of all the mailboxes in your organization in the Users OU.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-Mailbox -Anr Chr -DomainController DC01
```

This example returns all the mailboxes that resolve from the ambiguous name resolution search on the string "Chr" that are in the domain named DC01. This example returns mailboxes for users such as Chris Ashton, Christian Hess, and Christa Geller.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-Mailbox -Anr Chr -DomainController DC01
```

This example returns all the mailboxes that resolve from the ambiguous name resolution search on the string "Chr" using the information from the domain controller named DC01. This example returns mailboxes for users such as Chris Ashton, Christian Hess, and Christa Geller.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-Mailbox -Anr Chr
```

This example returns all the mailboxes that resolve from the ambiguous name resolution search on the string "Chr". This example returns mailboxes for users such as Chris Ashton, Christian Hess, and Christa Geller.

### Example 3 -------------------------- (Exchange Online)
```
Get-Mailbox -Anr Chr
```

This example returns all the mailboxes that resolve from the ambiguous name resolution search on the string "Chr". This example returns mailboxes for users such as Chris Ashton, Christian Hess, and Christa Geller.

### Example 4 -------------------------- (Exchange Server 2010)
```
Get-Mailbox -Identity Chris -Archive
```

This example returns information about the mailbox named Chris, including archive mailbox information.

### Example 4 -------------------------- (Exchange Server 2013)
```
Get-Mailbox -Archive -Server Mailbox01
```

This example returns a summary list of all archive mailboxes on the Mailbox server named Mailbox01.

### Example 4 -------------------------- (Exchange Server 2016)
```
Get-Mailbox -Archive -Server Mailbox01
```

This example returns a summary list of all archive mailboxes on the Mailbox server named Mailbox01.

### Example 4 -------------------------- (Exchange Online)
```
Get-Mailbox -Archive -Server Mailbox01
```

This example returns a summary list of all archive mailboxes on the Mailbox server named Mailbox01.

### Example 5 -------------------------- (Exchange Server 2010)
```
Get-Mailbox -Identity ed@contoso.com -RemoteArchive
```

This example returns information about the mailbox ed@contoso.com, including information about his remote archive mailbox.

### Example 5 -------------------------- (Exchange Server 2013)
```
Get-Mailbox -Identity ed@contoso.com -RemoteArchive
```

This example returns information about the remote archive mailbox for the user ed@contoso.com.

### Example 5 -------------------------- (Exchange Server 2016)
```
Get-Mailbox -Identity ed@contoso.com -RemoteArchive
```

This example returns information about the remote archive mailbox for the user ed@contoso.com.

### Example 5 -------------------------- (Exchange Online)
```
Get-Mailbox -Identity ed@contoso.com -RemoteArchive
```

This example returns information about the remote archive mailbox for the user ed@contoso.com.

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
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Arbitration
!!! Exchange Server 2010

The Arbitration parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Arbitration parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval.



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

### -Archive
!!! Exchange Server 2010

The Archive parameter specifies whether to return information about the recipient's archive mailbox.



!!! Exchange Server 2013

The Archive switch specifies that the command returns only archive mailboxes. This switch is required to display information about archive mailboxes.



!!! Exchange Server 2016, Exchange Online

The Archive switch specifies whether to include only archive mailboxes in the results. You don't need to specify a value with this switch.

This switch is required to return archive mailboxes.



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

### -Credential
!!! Exchange Server 2010

The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Credential parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
!!! Exchange Server 2010

The Database parameter specifies the database from which to get the mailbox. You can use the following values:

- GUID of the database

- Database name

This parameter can't be used in conjunction with the Filter parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Database parameter specifies the database that contains the mailboxes that you want to view. You can any value that uniquely identifies the database. For example:

- GUID

- Database name

You can't use this parameter with the Filter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Database parameter filters the results by mailbox database. When you use this parameter, only mailboxes on the specified database are included in the results. You can any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

You can't use this parameter with the Anr, Identity, or Server parameters.



```yaml
Type: DatabaseIdParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

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

### -Filter
!!! Exchange Server 2010

The Filter parameter indicates the OPath filter used to filter recipients.

For more information about the filterable properties, see Filterable Properties for the -Filter Parameter.



!!! Exchange Server 2013

The Filter parameter indicates the OPath filter used to filter recipients.

For more information about the filterable properties, see Filterable properties for the -Filter parameter.



!!! Exchange Server 2016, Exchange Online

The Filter parameter indicates the OPath filter used to filter recipients.

For more information about the filterable properties, see Filterable properties for the -Filter parameter (https://technet.microsoft.com/library/bb738155.aspx).



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

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identity of the mailbox. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Display name

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2013

The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox.

For example:

- Alias

- Distinguished name (DN)

- GUID

- Name

- Display name

- LegacyExchangeDN

- Email address



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox.

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

You can't use this parameter with the Anr, Database, MailboxPlan or Server parameters.



```yaml
Type: MailboxIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IgnoreDefaultScope
!!! Exchange Server 2010

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

- You can't use the OrganizationalUnit and Identity parameters together.

- You can't use the Credential parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



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

### -MailboxPlan
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The MailboxPlan parameter specifies the command to return mailboxes associated with this mailbox plan. A mailbox plan specifies the permissions and features available to a mailbox user. The mailbox plan name you provide must be included in the service plan for the organization in which this mailbox belongs. For more information, see Understanding Service Plans and Mailbox Plans.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The MailboxPlan parameter specifies the command to return mailboxes associated with this mailbox plan. A mailbox plan specifies the permissions and features available to a mailbox user. The mailbox plan name you provide must be included in the service plan for the organization in which this mailbox belongs.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The MailboxPlan parameter filters the results by mailbox plan. When you use this parameter, only mailboxes that are assigned the specified mailbox plan are returned in the results. You can use any value that uniquely identifies the mailbox plan. For example:

- Name

- Alias

- Display name

- Distinguished name (DN)

- GUID

A mailbox plan specifies the permissions and features available to a mailbox user in cloud-based organizations. You can see the available mailbox plans by using the Get-MailboxPlan cmdlet.

You can't use this parameter with the Anr or Identity parameters.



```yaml
Type: MailboxPlanIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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

### -OrganizationalUnit
!!! Exchange Server 2010, Exchange Server 2013

The OrganizationalUnit parameter specifies an organizational unit (OU) and is used to limit the results. If you use this parameter, you only get mailboxes in the container that you specify. You can use either the OU or the domain name. If you use the OU, you must specify the canonical name of the OU.



!!! Exchange Server 2016, Exchange Online

The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID



```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
!!! Exchange Server 2010

The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you set the recipient scope to include all recipients in the forest and don't use this parameter, it's possible that the user information is read from a global catalog with outdated information. If you use this parameter, multiple reads might be necessary to get the information.

By default, the recipient scope is set to the domain that hosts your servers that run Exchange.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. If you run the command Set-AdServerSettings -ViewEntireForest $true to include all objects in the forest and you don't use the ReadFromDomainController switch, it's possible that information will be read from a global catalog that has outdated information. When you use the ReadFromDomainController switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch.

By default, the recipient scope is set to the domain that hosts your Exchange servers.



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

### -RecipientTypeDetails
!!! Exchange Server 2010

The RecipientTypeDetails parameter specifies the type of recipients returned. Recipient types are divided into recipient types and subtypes. Each recipient type contains all common properties for all subtypes. For example, the type UserMailbox represents a user account in Active Directory that has an associated mailbox. Because there are several mailbox types, each mailbox type is identified by the RecipientTypeDetails parameter. For example, a conference room mailbox has RecipientTypeDetails set to RoomMailbox, whereas a user mailbox has RecipientTypeDetails set to UserMailbox.

This parameter accepts the following values:

- RoomMailbox

- EquipmentMailbox

- LegacyMailbox

- LinkedMailbox

- UserMailbox

- DiscoveryMailbox

- SharedMailbox



!!! Exchange Server 2013

The RecipientTypeDetails parameter specifies the type of recipients returned. Recipient types are divided into recipient types and subtypes. Each recipient type contains all common properties for all subtypes. For example, the type UserMailbox represents a user account that has an associated mailbox. Because there are several mailbox types, each mailbox type is identified by the RecipientTypeDetails parameter. For example, a conference room mailbox has RecipientTypeDetails set to RoomMailbox, whereas a user mailbox has RecipientTypeDetails set to UserMailbox.

This parameter accepts the following values:

- DiscoveryMailbox

- EquipmentMailbox

- LegacyMailbox

- LinkedMailbox

- RoomMailbox

- SharedMailbox

- UserMailbox



!!! Exchange Server 2016, Exchange Online

The RecipientTypeDetails parameter filters the results by the specified mailbox subtype. Valid values are:

- DiscoveryMailbox

- EquipmentMailbox

- GroupMailbox

- LegacyMailbox

- LinkedMailbox

- LinkedRoomMailbox

- RoomMailbox

- SchedulingMailbox

- SharedMailbox

- TeamMailbox

- UserMailbox

You can specify multiple values separated by commas.



```yaml
Type: RecipientTypeDetails[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteArchive
!!! Exchange Server 2010

The RemoteArchive parameter specifies whether to disconnect the remote archive for this mailbox. A remote archive exists in a cloud-based service.

When you use this parameter, you can't use the Archive parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The RemoteArchive switch specifies that the command returns only remote archive mailboxes. Remote archive mailboxes exist in the cloud-based service. This switch is required to display information about remote archive mailboxes.

When you use this switch, you can't use the Archive switch.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The RemoteArchive switch specifies whether to include only remote archive mailboxes in the results. You don't need to specify a value with this switch.

This switch is required to return remote archive mailboxes.

Remote archive mailboxes are archive mailboxes in the cloud-based service that are associated with mailbox users in on-premises Exchange organizations.



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

### -ResultSize
!!! Exchange Server 2010

The ResultSize parameter specifies the maximum number of results to return. If you want to return all mailboxes that match the query, use unlimited for the value of this parameter. The default value is 1000.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.



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

### -Server
!!! Exchange Server 2010

The Server parameter specifies an individual server and is used to limit the results. If you use this parameter, you only get mailboxes that reside on the server that you specify. Use the common name of the server that you want to specify.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Server parameter specifies the Exchange server on which you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use the Server parameter, the command is run on the local server.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Server parameter filters the results by Exchange server. When you use this parameter, only mailboxes on the specified Exchange server are included in the results.

You can use any value that uniquely identifies the server. For example:

- Name (for example, Exchange01)

- Distinguished name (DN) (for example, CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com)

- Exchange Legacy DN (for example, /o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01)

- GUID (for example, bc014a0d-1509-4ecc-b569-f077eec54942)

You can't use this parameter with the Anr, Database, or Identity parameters.

The ServerName and ServerLegacyDN properties for a mailbox may not be updated immediately after a mailbox move within a database availability group (DAG). To get the most up-to-date values for these mailbox properties, run the command Get-Mailbox \<Identity\> | Get-MailboxStatistics | Format-List Name,ServerName,ServerLegacyDN.



```yaml
Type: ServerIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SortBy
!!! Exchange Server 2010

The SortBy parameter specifies the attribute by which to sort the results. You can sort by only one attribute at a time. You can sort by the following attributes:

- Alias

- Display name

- Name

The results are sorted in ascending order.



!!! Exchange Server 2013

The SortBy parameter specifies the attribute by which to sort the results. You can sort by only one attribute at a time. The results are sorted in ascending order.

You can sort by the following attributes:

- Alias

- DisplayName

- Name



!!! Exchange Server 2016, Exchange Online

The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName

- Alias

- Office

- ServerLegacyDN



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

### -InactiveMailboxOnly
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The InactiveMailboxOnly switch specifies that the command returns only inactive mailboxes. An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The InactiveMailboxOnly switch specifies whether to include only inactive mailboxes in the results. You don't need to specify a value with this switch.

When you use this switch, only inactive mailboxes are included in the results.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.



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

### -IncludeInactiveMailbox
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The IncludeInactiveMailbox switch specifies that the command returns both active and inactive mailboxes. An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The IncludeInactiveMailbox switch specifies whether to include inactive mailboxes in the results. You don't need to specify a value with this switch.

When you use this switch, active and inactive mailboxes are included in the results.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.



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

### -Monitoring
!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Monitoring switch specifies that the command returns only monitoring mailboxes. Monitoring mailboxes are associated with managed availability and the Exchange Health Manager service, and have a RecipientTypeDetails property value of MonitoringMailbox.. Two monitoring mailboxes are automatically created for each mailbox database in your organization: one for monitoring the health of public folders and one for monitoring the health of site mailboxes.

This switch is required to display information about monitoring mailboxes.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Monitoringswitch specifies whether to include only monitoring mailboxes in the results. You don't need to specify a value with this switch.

This switch is required to return monitoring mailboxes.

Monitoring mailboxes are associated with managed availability and the Exchange Health Manager service, and have a RecipientTypeDetails property value of MonitoringMailbox.



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

### -PublicFolder
!!! Exchange Server 2013

The PublicFolder switch specifies that the command returns only public folder mailboxes. Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders. This switch is required to display information about public folder mailboxes.



!!! Exchange Server 2016, Exchange Online

The PublicFolder switch specifies whether to include only public folder mailboxes in the results. You don't need to specify a value with this switch.

This switch is required to return public folder mailboxes.



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

### -SoftDeletedMailbox
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The SoftDeletedMailbox switch specifies that the command returns only soft-deleted mailboxes. Soft-deleted mailboxes are deleted mailboxes that are still recoverable. This switch is required to display information about soft-deleted mailboxes.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The SoftDeletedMailbox switch specifies whether to include only soft-deleted mailboxes in the results. You don't need to specify a value with this switch.

This switch is required to return soft-deleted mailboxes.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.



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

### -AuditLog
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

### -AuxAuditLog
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

### -GroupMailbox
The GroupMailbox switch specifies whether to include only Office 365 groups in the results. You don't need to specify a value with this switch.

This switch is required to return Office 365 groups.

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

### -Migration
The Migration switch specifies whether to include only migration mailboxes in the results. You don't need to specify a value with this switch.

This switch is required to return migration mailboxes.

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

### -SupervisoryReviewPolicy
PARAMVALUE: SwitchParameter

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

[Online Version](https://technet.microsoft.com/library/8a5a6eb9-4a75-47f9-ae3b-a3ba251cf9a8.aspx)

