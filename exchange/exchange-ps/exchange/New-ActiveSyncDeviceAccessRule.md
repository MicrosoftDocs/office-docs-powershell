---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# New-ActiveSyncDeviceAccessRule

## SYNOPSIS
!!! Exchange Server 2010

Use the New-ActiveSyncDeviceAccessRule cmdlet to define an access group of Exchange mobile devices along with their access level.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-ActiveSyncDeviceAccessRule cmdlet to define the access levels for Exchange ActiveSync devices based on the identity of the device.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-ActiveSyncDeviceAccessRule -AccessLevel <Allow | Block | Quarantine>
 -Characteristic <DeviceType | DeviceModel | DeviceOS | UserAgent> -QueryString <String> [-Confirm]
 [-DomainController <Fqdn>] [-Organization <OrganizationIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can create multiple groups of devices: allowed devices, blocked devices, and quarantined devices.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You can create multiple rules that define groups of devices: Allowed devices, blocked devices, and quarantined devices.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

You can create multiple rules that define groups of devices: Allowed devices, blocked devices, and quarantined devices.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-ActiveSyncDeviceAccessRule -QueryString PocketPC -Characteristic DeviceModel -AccessLevel Block
```

This example creates a device access rule that applies to devices defined with the QueryString parameter set to PocketPC for the device model and blocks those devices.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-ActiveSyncDeviceAccessRule -Characteristic DeviceOS -QueryString "iOS 6.1 10B145" -AccessLevel Block
```

This example creates device access rules that blocks access for iPhones that are running iOS version 6.1.1.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-ActiveSyncDeviceAccessRule -Characteristic DeviceOS -QueryString "iOS 6.1 10B145" -AccessLevel Block
```

This example creates device access rules that blocks access for iPhones that are running iOS version 6.1.1.

### Example 1 -------------------------- (Exchange Online)
```
New-ActiveSyncDeviceAccessRule -Characteristic DeviceOS -QueryString "iOS 6.1 10B145" -AccessLevel Block
```

This example creates device access rules that blocks access for iPhones that are running iOS version 6.1.1.

### Example 2 -------------------------- (Exchange Server 2010)
```
New-ActiveSyncDeviceAccessRule -QueryString MSFT-PPC/5.2.5001-Characteristic UserAgent -AccessLevel Allow
```

This example creates a device access rule that applies to devices defined with the QueryString parameter set to MSFT-PPC/5.2.5001 for the user agent and allows those devices.

### Example 2 -------------------------- (Exchange Server 2013)
```
New-ActiveSyncDeviceAccessRule -Characteristic UserAgent -QueryString NokiaE521/2.00()MailforExchange -AccessLevel Allow
```

This example creates a device access rule that uses the UserAgent characteristic to allow access for Nokia E52-1 phones.

### Example 2 -------------------------- (Exchange Server 2016)
```
New-ActiveSyncDeviceAccessRule -Characteristic UserAgent -QueryString NokiaE521/2.00()MailforExchange -AccessLevel Allow
```

This example creates a device access rule that uses the UserAgent characteristic to allow access for Nokia E52-1 phones.

### Example 2 -------------------------- (Exchange Online)
```
New-ActiveSyncDeviceAccessRule -Characteristic UserAgent -QueryString NokiaE521/2.00()MailforExchange -AccessLevel Allow
```

This example creates a device access rule that uses the UserAgent characteristic to allow access for Nokia E52-1 phones.

## PARAMETERS

### -AccessLevel
!!! Exchange Server 2010

The AccessLevel parameter specifies the state of all devices.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The AccessLevel parameter specifies the access level of devices that are defined by the rule. Valid values for this parameter are Allow, Block and Quarantine.



```yaml
Type: Allow | Block | Quarantine
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Characteristic
!!! Exchange Server 2010

The Characterisic parameter specifies the device characteristic that the query string is to be compared to.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The Characteristic parameter specifies the device characteristic or category that's used by the rule. Valid values for this parameter are:

- DeviceModel

- DeviceType

- DeviceOS

- UserAgent

- XMSWLHeader



```yaml
Type: DeviceType | DeviceModel | DeviceOS | UserAgent
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueryString
!!! Exchange Server 2010

The QueryString parameter specifies which devices this rule applies to.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The QueryString parameter specifies the device identifier that's used by the rule. This parameter uses a text value that's used with Characteristic parameter value to define the device. Wildcards or partial matches aren't allowed.

You can use the Get-MobileDevice cmdlet to find the text values that you can use with the QueryString parameter. For example: Get-MobileDevice | Format-List DeviceOS,DeviceModel,DeviceType.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

[Online Version](https://technet.microsoft.com/library/a33c69d8-4d19-4e9d-b5cf-27727b7c4a8f.aspx)

