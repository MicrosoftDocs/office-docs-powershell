---
applicable: Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Add-GlobalMonitoringOverride

## SYNOPSIS
!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Add-GlobalMonitoringOverride cmdlet to override the thresholds and parameters of managed availability probes, monitors, and responders on all Exchange 2013 servers in your organization. The cmdlet enables monitoring changes and threshold tuning to the environment.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Add-GlobalMonitoringOverride cmdlet to override the thresholds and parameters of the managed availability probes, monitors, and responders on all Exchange 2013or later servers in your organization. The cmdlet enables monitoring changes and threshold tuning to the environment.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Add-GlobalMonitoringOverride [-Identity] <String> -ApplyVersion <Version>
 -ItemType <Probe | Monitor | Responder | Maintenance> -PropertyName <String> -PropertyValue <String>
 [-Confirm] [-DomainController <Fqdn>] [-WhatIf] [-Roles <String>] [<CommonParameters>]
```

### Set1
```
Add-GlobalMonitoringOverride [-Identity] <String> -ItemType <Probe | Monitor | Responder | Maintenance>
 -PropertyName <String> -PropertyValue <String> [-Confirm] [-DomainController <Fqdn>]
 [-Duration <EnhancedTimeSpan>] [-WhatIf] [-BuildRange <String>] [-Roles <String>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Shell infrastructure permissions" section in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2013)
```
Add-GlobalMonitoringOverride -Identity "FrontendTransport\OnPremisesInboundProxy" -PropertyName Enabled -PropertyValue 0 -Duration 30.00:00:00 -ItemType Probe
```

This example adds a global monitoring override that disables the OnPremisesInboundProxy probe for 30 days. Note that the value of Identity is case-sensitive.

### Example 1 -------------------------- (Exchange Server 2016)
```
Add-GlobalMonitoringOverride -Identity "FrontendTransport\OnPremisesInboundProxy" -PropertyName Enabled -PropertyValue 0 -Duration 30.00:00:00 -ItemType Probe
```

This example adds a global monitoring override that disables the OnPremisesInboundProxy probe for 30 days. Note that the value of Identity is case-sensitive.

### Example 2 -------------------------- (Exchange Server 2013)
```
Add-GlobalMonitoringOverride -Identity "MailboxSpace\StorageLogicalDriveSpaceEscalate" -PropertyName Enabled -PropertyValue 0 -ItemType Responder -ApplyVersion "15.00.0847.032"
```

This example adds a global monitoring override that disables the StorageLogicalDriveSpaceEscalate responder for all servers running version 15.00.0847.032. Note that the value of Identity is case-sensitive.

### Example 2 -------------------------- (Exchange Server 2016)
```
Add-GlobalMonitoringOverride -Identity "MailboxSpace\StorageLogicalDriveSpaceEscalate" -PropertyName Enabled -PropertyValue 0 -ItemType Responder -ApplyVersion "15.01.0225.0422"
```

This example adds a global monitoring override that disables the StorageLogicalDriveSpaceEscalate responder for all Exchange 2016servers running version 15.01.0225.0422. Note that the value of Identity is case-sensitive.

## PARAMETERS

### -ApplyVersion
!!! Exchange Server 2013

The ApplyVersion parameter specifies the version of Exchange that gets the override. If an Exchange server is older or newer than the version you specify, the override isn't applied to the server. Typically, you increase the Exchange version by applying Cumulative Updates or Service Packs.

Valid input for this parameter is an Exchange version number in the format 15.00.xxxx.xxx.

You can't use this parameter with the Duration parameter.



!!! Exchange Server 2016

The ApplyVersion parameter specifies the version of Exchange that gets the override. If an Exchange server is older or newer than the version you specify, the override isn't applied to the server. Typically, you increase the Exchange version by applying Cumulative Updates or Service Packs.

Valid input for this parameter is an Exchange version number in the format 15.0x.xxxx.xxx.

You can't use this parameter with the Duration parameter.



```yaml
Type: Version
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identity of the probe, monitor, or responder. This parameter uses the syntax \<HealthSetName\>\\\<MonitoringItemName\>[\\\<TargetResource\>]. Note that the values are case sensitive. For example, use "AD\\ActiveDirectoryConnectivityServerReboot", not "ad\\activedirectoryconnectivityserverreboot".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemType
The ItemType parameter specifies the item type for the property that you want to override. Valid values are:

- Probe

- Monitor

- Responder

```yaml
Type: Probe | Monitor | Responder | Maintenance
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyName
The PropertyName parameter specifies the property that you want to override.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyValue
The PropertyValue parameter specifies the new value for the property that you want to override.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -Duration
!!! Exchange Server 2013

The Duration parameter specifies the length of time that the override is active.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, 30.10:00:00 specifies 30 days and 10 hours.

You can't use this parameter with the ApplyVersion parameter.



!!! Exchange Server 2016

The Duration parameter specifies the length of time that the override is active.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, 30.10:00:00 specifies 30 days and 10 hours.

You can't use this parameter with the ApplyVersion parameter.



```yaml
Type: EnhancedTimeSpan
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BuildRange
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Roles
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/9d5ec0ec-a7bc-4bea-a62e-6252407ed7e8.aspx)

