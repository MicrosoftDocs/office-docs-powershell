---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MobileDevice

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MobileDevice cmdlet to get the list of devices in your organization that have active Exchange ActiveSync partnerships.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-MobileDevice -Mailbox <MailboxIdParameter> [-ActiveSync] [-DomainController <Fqdn>] [-Filter <String>]
 [-Monitoring] [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OWAforDevices] [-ResultSize <Unlimited>]
 [-SortBy <String>] [-RestApi] [-UniversalOutlook] [<CommonParameters>]
```

### Set1
```
Get-MobileDevice [[-Identity] <MobileDeviceIdParameter>] [-ActiveSync] [-DomainController <Fqdn>]
 [-Filter <String>] [-Monitoring] [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OWAforDevices]
 [-ResultSize <Unlimited>] [-SortBy <String>] [-RestApi] [-UniversalOutlook] [<CommonParameters>]
```

## DESCRIPTION
The Get-MobileDevice cmdlet returns identification, configuration, and status information for each mobile device.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-MobileDevice -Identity "TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

### Example 2
```
Get-MobileDevice -Mailbox "Redmond\TonySmith"
```

This example returns all the Exchange ActiveSync mobile devices that Tony Smith has used that are associated with his mailbox.

## PARAMETERS

### -Mailbox
The Mailbox parameter filters the results by mailbox. You can use any value that uniquely identifies the mailbox.

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveSync
The ActiveSync switch specifies whether to include mobile devices that synchronize with Exchange ActiveSync. You don't need to specify a value with this switch.

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

### -Filter
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mobile device that you want to view. You can use any value that uniquely identifies the mobile device. For example:

- GUID

- DeviceIdentity

- Multi-TenantID

```yaml
Type: MobileDeviceIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Monitoring
This parameter is available only in on-premises Exchange.

The Monitoring parameter specifies whether mobile devices that are created by monitoring accounts are exposed by the Get-MobileDevice cmdlet. The default value is $false.

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAforDevices
The OWAforDevices switch filters the results by whether Outlook on the web for devices is enabled for the device. You don't need to specify a value with this switch.

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

### -SortBy
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestApi
The RestApi switch filters the results by REST API devices. You don't need to specify a value with this switch.

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

### -UniversalOutlook
The UniversalOutlook switch filters the results by Mail and Calendar devices. You don't need to specify a value with this switch.

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/ce8a4142-23c1-47d5-89c5-961bd6e9d162.aspx)
