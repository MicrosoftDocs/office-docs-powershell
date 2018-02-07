---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-ActiveSyncDevice

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-ActiveSyncDevice cmdlet to retrieve the list of devices in your organization that have active Microsoft Exchange ActiveSync partnerships.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ActiveSyncDevice cmdlet to retrieve the list of devices in your organization that have active Microsoft Exchange ActiveSync partnerships.

The Get-ActiveSyncDevice cmdlet will be removed in a future version of Exchange. Use the Get-MobileDevice cmdlet instead. If you have any scripts that use the Get-ActiveSyncDevice cmdlet, update them to use the Get-MobileDevice cmdlet.

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ActiveSyncDevice cmdlet to retrieve the list of devices in your organization that have active Exchange ActiveSync partnerships.

The Get-ActiveSyncDevice cmdlet will be removed in a future version of Exchange. Use the Get-MobileDevice cmdlet instead. If you have any scripts that use the Get-ActiveSyncDevice cmdlet, update them to use the Get-MobileDevice cmdlet.

## SYNTAX

### Set2
```
Get-ActiveSyncDevice -Mailbox <MailboxIdParameter> [-DomainController <Fqdn>] [-Filter <String>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ResultSize <Unlimited>] [-SortBy <String>] [-Monitoring] [<CommonParameters>]
```

### Set1
```
Get-ActiveSyncDevice [[-Identity] <ActiveSyncDeviceIdParameter>] [-DomainController <Fqdn>] [-Filter <String>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ResultSize <Unlimited>] [-SortBy <String>] [-Monitoring] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-ActiveSyncDevice cmdlet returns identification, configuration, and status information for each device.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync user settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Get-ActiveSyncDevice cmdlet returns identification, configuration, and status information for each device.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mobile devices user settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

The Get-ActiveSyncDevice cmdlet returns identification, configuration, and status information for each device.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-ActiveSyncDevice -Identity "TonySmith"
```

This example returns all the Exchange ActiveSync devices that Tony Smith has used that are associated with his mailbox.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-ActiveSyncDevice -Identity "TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-ActiveSyncDevice -Identity "TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

### Example 1 -------------------------- (Exchange Online)
```
Get-ActiveSyncDevice -Identity "TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-ActiveSyncDevice -Mailbox "Redmond\TonySmith"
```

This example returns all the Exchange ActiveSync devices that Tony Smith has used that are associated with his mailbox.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-ActiveSyncDevice -Mailbox "Redmond\TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-ActiveSyncDevice -Mailbox "Redmond\TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

### Example 2 -------------------------- (Exchange Online)
```
Get-ActiveSyncDevice -Mailbox "Redmond\TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

## PARAMETERS

### -Mailbox
!!! Exchange Server 2010

The Mailbox parameter specifies the user whose Exchange ActiveSync devices you want to retrieve.



!!! Exchange Server 2013

The Mailbox parameter specifies the user whose mobile devices you want to retrieve.



!!! Exchange Server 2016, Exchange Online

The Mailbox parameter specifies the mailbox that has the associated ActiveSync device that you want to view. You can use any value that uniquely identifies the mailbox.

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
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
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

The Filter parameter specifies a set of attributes used to filter the list of returned devices.



!!! Exchange Server 2013

The Filter parameter specifies a set of attributes used to filter the list of returned mobile devices.



!!! Exchange Server 2016, Exchange Online

The Filter parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax {\<Property\> -\<Comparison operator\> '\<Value\>'}.

- \<Property\> is a filterable property.

- -\<Comparison Operator\> is an OPATH comparison operator. For example -eq for equals and -like for string comparison. For more information about comparison operators, see about\_Comparison\_Operators (https://go.microsoft.com/fwlink/p/?LinkId=620712).

- \<Value\> is the property value. Text values with or without spaces need to be enclosed in quotation marks ('\<Value\>'). Don't use quotation marks with integers or the system values $true, $false, or $null.

You can chain multiple search criteria together using the logical operators -and and -or. For example, {\<Criteria1\>) -and \<Criteria2\>} or {(\<Criteria1\> -and \<Criteria2\>) -or \<Criteria3\>}.

You can filter by the following properties:

- ClientType

- DeviceAccessControlRule

- DeviceAccessState

- DeviceAccessStateReason

- DeviceActiveSyncVersion

- DeviceId

- DeviceImei

- DeviceMobileOperator

- DeviceModel

- DeviceOS

- DeviceOSLanguage

- DeviceTelephoneNumber

- DeviceType

- DeviceUserAgent

- FirstSyncTime

- FriendlyName

- ProvisioningFlags

- UserDisplayName



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

The Identity parameter specifies the device to retrieve. One of the following values is used to identify a device in Active Directory:

- GUID

- DeviceIdentity

- Multi-TenantID



!!! Exchange Server 2013

The Identity parameter specifies the device to retrieve. One of the following values is used to identify a mobile device in Active Directory:

- GUID

- DeviceIdentity

- Multi-TenantID



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the ActiveSync device that you want to view. You can use any value that uniquely identifies the device. For example:

- GUID

- DeviceIdentity

- Multi-TenantID



```yaml
Type: ActiveSyncDeviceIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
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

The OrganizationalUnit parameter specifies the organizational unit (OU) where the task is run.



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

### -ResultSize
!!! Exchange Server 2010, Exchange Server 2013

The ResultSize parameter specifies the maximum number of results to return.



!!! Exchange Server 2016, Exchange Online

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

### -SortBy
!!! Exchange Server 2010, Exchange Server 2013

The SortBy parameter specifies the attribute to sort by.



!!! Exchange Server 2016, Exchange Online

The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- DeviceAccessControlRule

- DeviceAccessState

- DeviceAccessStateReason

- DeviceId

- DeviceImei

- DeviceMobileOperator

- DeviceModel

- DeviceOS

- DeviceOSLanguage

- DeviceTelephoneNumber

- DeviceType

- DeviceUserAgent

- FirstSyncTime

- FriendlyName

- UserDisplayName



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

The Monitoring parameter specifies whether mobile devices created by monitoring accounts are included in the Get-ActiveSyncDevice cmdlet output. The default value is $false.

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

[Online Version](https://technet.microsoft.com/library/06a82fdc-9bf7-43c7-8471-d977034d3560.aspx)

