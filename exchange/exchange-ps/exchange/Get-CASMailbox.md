---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-CASMailbox

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-CASMailbox cmdlet to return a complete list of the attributes of a Microsoft Exchange Server 2010 mailbox on a computer that has the Client Access server role installed.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-CASMailbox cmdlet to view the client access settings that are configured on a mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-CASMailbox cmdlet to view the Client Access settings that are configured on mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-CASMailbox [-ActiveSyncDebugLogging] [-Anr <String>] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-GetImapProtocolLog] [-GetPopProtocolLog] [-IgnoreDefaultScope]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ProtocolSettings] [-ReadFromDomainController] [-ResultSize <Unlimited>] [-SendLogsTo <MultiValuedProperty>]
 [-SortBy <String>] [-Monitoring] [-RecalculateHasActiveSyncDevicePartnership] [-ActiveSyncSuppressReadReceipt]
 [-ReadIsOptimizedForAccessibility] [<CommonParameters>]
```

### Set1
```
Get-CASMailbox [[-Identity] <MailboxIdParameter>] [-ActiveSyncDebugLogging] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-GetImapProtocolLog] [-GetPopProtocolLog] [-IgnoreDefaultScope]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ProtocolSettings] [-ReadFromDomainController] [-ResultSize <Unlimited>] [-SendLogsTo <MultiValuedProperty>]
 [-SortBy <String>] [-Monitoring] [-RecalculateHasActiveSyncDevicePartnership] [-ActiveSyncSuppressReadReceipt]
 [-ReadIsOptimizedForAccessibility] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

A variety of CASMailbox attributes are returned. The types of attributes returned include Microsoft Office Outlook Web App, Exchange ActiveSync, POP3, and IMAP4.

By default, all attributes are returned for all mailboxes in the Exchange organization. You can filter these results by using the functionality in the Exchange Management Shell.

The Get-CASMailbox cmdlet can run only on an Exchange computer that has the Mailbox server role installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client Access user settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

This cmdlet returns a variety of client access settings for one or more mailboxes. These settings include options for MicrosoftOutlook Web App, MicrosoftExchange ActiveSync, POP3, and IMAP4.

The Get-CASMailbox cmdlet can run only on a Mailbox server.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client Access user settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

This cmdlet returns a variety of client access settings for one or more mailboxes. These settings include options for Outlook on the web, Exchange ActiveSync, POP3, and IMAP4.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-CASMailbox -Identity jeffhay@contoso.com
```

This example returns all Client Access server mailbox details for the user Jeff Hay in the Contoso domain.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-CASMailbox "Jeff Hay"
```

This example returns the values of the following client access settings for the user named Jeff Hay.


ActiveSyncEnabled

OWAEnabled

PopEnabled

ImapEnabled

MapiEnabled

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-CASMailbox "Jeff Hay"
```

This example returns the values of the following client access settings for the user named Jeff Hay.


ActiveSyncEnabled

OWAEnabled

PopEnabled

ImapEnabled

MapiEnabled

### Example 1 -------------------------- (Exchange Online)
```
Get-CASMailbox "Jeff Hay"
```

This example returns the values of the following client access settings for the user named Jeff Hay.


ActiveSyncEnabled

OWAEnabled

PopEnabled

ImapEnabled

MapiEnabled

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-CASMailbox -Identity contoso\tonysmith
```

This example returns all Client Access server mailbox details for the user Tony Smith in the Contoso domain.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-CASMailbox tony@contoso.com | Format-List Imap*
```

This example returns all IMAP4 settings for the user tony@contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-CASMailbox tony@contoso.com | Format-List Imap*
```

This example returns all IMAP4 settings for the user tony@contoso.com.

### Example 2 -------------------------- (Exchange Online)
```
Get-CASMailbox tony@contoso.com | Format-List Imap*
```

This example returns all IMAP4 settings for the user tony@contoso.com.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-CASMailbox -Identity fourthcoffee\tonysmith
```

This example returns all Client Access server mailbox details for the user Tony Smith in the fourthcoffee domain.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-CASMailbox chris@contoso.com | Format-List Ews*
```

This example returns all Exchange Web Services settings for the user chris@contoso.com.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-CASMailbox chris@contoso.com | Format-List Ews*
```

This example returns all Exchange Web Services settings for the user chris@contoso.com.

### Example 3 -------------------------- (Exchange Online)
```
Get-CASMailbox chris@contoso.com | Format-List Ews*
```

This example returns all Exchange Web Services settings for the user chris@contoso.com.

## PARAMETERS

### -ActiveSyncDebugLogging
!!! Exchange Server 2010

The ActiveSyncDebugLogging parameter specifies whether logging is enabled for Microsoft Exchange ActiveSync for the mailbox.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ActiveSyncDebugLogging switch shows the actual value of the ActiveSyncDebugLogging property for the mailbox. If you don't use this switch, the value always appears as $false.

To see this value, you need to use a formatting cmdlet. For example, Get-CasMailbox laura@contoso.com -ActiveSyncDebugLogging | Format-List.



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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
!!! Exchange Server 2010

The Credential parameter specifies the account to use to read from Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

The Filter parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax {\<Property\> -\<Comparison operator\> '\<Value\>'}.

- \<Property\> is a filterable property.

- -\<Comparison Operator\> is an OPATH comparison operator. For example -eq for equals and -like for string comparison. For more information about comparison operators, see about\_Comparison\_Operators (https://go.microsoft.com/fwlink/p/?LinkId=620712).

- \<Value\> is the property value. Text values with or without spaces need to be enclosed in quotation marks ('\<Value\>'). Don't use quotation marks with integers or the system values $true, $false, or $null.

You can chain multiple search criteria together using the logical operators -and and -or. For example, {\<Criteria1\>) -and \<Criteria2\>} or {(\<Criteria1\> -and \<Criteria2\>) -or \<Criteria3\>}.

You can filter by the following properties:

- ActiveSyncAllowedDeviceIDs

- ActiveSyncBlockedDeviceIDs

- ActiveSyncDebugLogging

- ActiveSyncEnabled

- ActiveSyncMailboxPolicy

- ActiveSyncSuppressReadReceipt

- DisplayName

- DistinguishedName

- ECPEnabled

- EmailAddresses

- EwsApplicationAccessPolicy

- EwsEnabled

- ExchangeVersion

- Guid

- HasActiveSyncDevicePartnership

- Id

- ImapEnabled

- LegacyExchangeDN

- MAPIEnabled

- Name

- ObjectCategory

- ObjectClass

- OWAEnabled

- OWAforDevicesEnabled

- OwaMailboxPolicy

- PopEnabled

- PrimarySmtpAddress

- SamAccountName

- ServerLegacyDN

- ServerName

- WhenChanged

- WhenChangedUTC

- WhenCreated

- WhenCreatedUTC

For more information, see Filterable properties for the -Filter parameter.



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

### -GetImapProtocolLog
The GetImapProtocolLog parameter specifies whether to retrieve the IMAP protocol log.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetPopProtocolLog
The GetPopProtocolLog parameter specifies whether to retrieve the POP protocol log.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the mailbox ID. You can use the following values:

- GUID

- Distinguished name (DN)

- User principal name (UPN)

- SMTP address

- Alias



!!! Exchange Server 2013

The Identity parameter specifies the mailbox that you want to view.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



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
!!! Exchange Server 2010, Exchange Server 2013

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

- You can't use the OrganizationalUnit and Identity parameters together.

- You can't use the Credential parameter.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The OrganizationalUnit parameter limits the search to a specific container.



!!! Exchange Server 2013

The OrganizationalUnit parameter limits the search to the specified organizational unit (OU). You can use any value that uniquely identifies the OU. For example:

- Distinguished name (DN)

  Example: OU=Users,DC=contoso,DC=com

- Canonical name (CN)

  Example: contoso.com/Users

- GUID

  Example: 8d3d920d-fe9c-4432-8b94-d84027f5d627



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

### -ProtocolSettings
!!! Exchange Server 2010

The ProtocolSetting parameter returns the POP3, IMAP4, and SMTP server names for the mailbox.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ProtocolSettings switch returns the server names, TCP ports and encryption methods for the following settings:

- ExternalImapSettings

- InternalImapSettings

- ExternalPopSettings

- InternalPopSettings

- ExternalSmtpSettings

- InternalSmtpSettings

To see these values, you need to use a formatting cmdlet. For example, Get-CasMailbox laura@contoso.com -ProtocolSettings | Format-List.



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

### -ReadFromDomainController
!!! Exchange Server 2010

The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you have set the recipient scope to include all recipients in the forest and you don't use this parameter, the user information may be read from a global catalog server whose information is outdated. If you use this parameter, multiple reads may be necessary to retrieve the information.

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

### -ResultSize
!!! Exchange Server 2010

The ResultSize parameter specifies the maximum number of results to return. The default value is 1000.



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

### -SendLogsTo
The SendLogsTo parameter specifies an address to receive the log files.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
!!! Exchange Server 2010

The SortBy parameter specifies the attribute used to sort the results. The results are sorted in ascending order.



!!! Exchange Server 2013

The SortBy parameter specifies the attribute by which to sort the results. You can sort by only one attribute at a time. The results are sorted in ascending order.



!!! Exchange Server 2016, Exchange Online

The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName

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

### -Monitoring
This parameter is available only in on-premises Exchange.

The Monitoring switch includes mailboxes that were created by monitoring accounts in the results. By default, these mailboxes aren't included in the results. You don't have to specify a value with this switch.

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

### -RecalculateHasActiveSyncDevicePartnership
The RecalculateHasActiveSyncDevicePartnership switch recalculates the value of the HasActiveSyncDevicePartnership property on the mailbox. The value is automatically updated if it's found to be incorrect. You don't have to specify a value with this switch.

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

### -ActiveSyncSuppressReadReceipt
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

### -ReadIsOptimizedForAccessibility
The ReadIsOptimizedForAccessibility switch specifies whether to read the value of the IsOptimizedForAccessibility property on the mailbox (whether the mailbox is configured to use the light version of Outlook on the web). You don't need to specify a value with this switch.

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

[Online Version](https://technet.microsoft.com/library/d80a5990-9106-4eb8-bba8-b3975805c325.aspx)

