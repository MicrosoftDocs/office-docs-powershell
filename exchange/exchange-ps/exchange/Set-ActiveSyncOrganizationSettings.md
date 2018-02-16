---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-ActiveSyncOrganizationSettings

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-ActiveSyncOrganizationSettings cmdlet to set the Microsoft Exchange ActiveSync settings for the organization.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-ActiveSyncOrganizationSettings cmdlet to set the Microsoft Exchange ActiveSync settings for the organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-ActiveSyncOrganizationSettings cmdlet to set the Exchange ActiveSync settings for the organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Set-ActiveSyncOrganizationSettings [[-Identity] <ActiveSyncOrganizationSettingsIdParameter>]
 [-AdminMailRecipients <MultiValuedProperty>] [-Confirm] [-DefaultAccessLevel <Allow | Block | Quarantine>]
 [-DomainController <Fqdn>] [-OtaNotificationMailInsert <String>] [-UserMailInsert <String>] [-WhatIf]
 [<CommonParameters>]
```

### Set2
```
Set-ActiveSyncOrganizationSettings [-Identity] <ActiveSyncOrganizationSettingsIdParameter>
 [-AdminMailRecipients <MultiValuedProperty>] [-AllowAccessForUnSupportedPlatform <$true | $false>] [-Confirm]
 [-DefaultAccessLevel <Allow | Block | Quarantine>] [-DomainController <Fqdn>]
 [-OtaNotificationMailInsert <String>] [-UserMailInsert <String>] [-WhatIf]
 [-AllowRMSSupportForUnenlightenedApps <$true | $false>] [<CommonParameters>]
```

### Set3
```
Set-ActiveSyncOrganizationSettings [-Identity] <ActiveSyncOrganizationSettingsIdParameter>
 [-AdminMailRecipients <MultiValuedProperty>] [-AllowAccessForUnSupportedPlatform <$true | $false>] [-Confirm]
 [-DefaultAccessLevel <Allow | Block | Quarantine>] [-DomainController <Fqdn>]
 [-OtaNotificationMailInsert <String>] [-UserMailInsert <String>] [-WhatIf]
 [-AllowRMSSupportForUnenlightenedApps <$true | $false>] [<CommonParameters>]
```

### Set4
```
Set-ActiveSyncOrganizationSettings [-Identity] <ActiveSyncOrganizationSettingsIdParameter>
 [-AdminMailRecipients <MultiValuedProperty>] [-AllowAccessForUnSupportedPlatform <$true | $false>] [-Confirm]
 [-DefaultAccessLevel <Allow | Block | Quarantine>] [-DomainController <Fqdn>]
 [-OtaNotificationMailInsert <String>] [-UserMailInsert <String>] [-WhatIf]
 [-AllowRMSSupportForUnenlightenedApps <$true | $false>] [<CommonParameters>]
```

### Set5
```
Set-ActiveSyncOrganizationSettings [-Identity] <ActiveSyncOrganizationSettingsIdParameter>
 [-AdminMailRecipients <MultiValuedProperty>] [-AllowAccessForUnSupportedPlatform <$true | $false>] [-Confirm]
 [-DefaultAccessLevel <Allow | Block | Quarantine>] [-DomainController <Fqdn>]
 [-OtaNotificationMailInsert <String>] [-UserMailInsert <String>] [-WhatIf]
 [-AllowRMSSupportForUnenlightenedApps <$true | $false>] [<CommonParameters>]
```

### Set1
```
Set-ActiveSyncOrganizationSettings [[-Identity] <ActiveSyncOrganizationSettingsIdParameter>]
 [-AdminMailRecipients <MultiValuedProperty>] [-AllowAccessForUnSupportedPlatform <$true | $false>] [-Confirm]
 [-DefaultAccessLevel <Allow | Block | Quarantine>] [-DomainController <Fqdn>]
 [-OtaNotificationMailInsert <String>] [-UserMailInsert <String>] [-WhatIf]
 [-AllowRMSSupportForUnenlightenedApps <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-ActiveSyncOrganizationSettings -DefaultAccessLevel Quarantine -AdminMailRecipients will@contoso.com, roger@contoso.com
```

This example sets the default access level to quarantine and sets two administrative e-mail addresses.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-ActiveSyncOrganizationSettings -DefaultAccessLevel Quarantine -AdminMailRecipients will@contoso.com,roger@contoso.com
```

This example sets the default access level to quarantine and sets two administrative email addresses.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-ActiveSyncOrganizationSettings -DefaultAccessLevel Quarantine -AdminMailRecipients will@contoso.com,roger@contoso.com
```

This example sets the default access level to quarantine and sets two administrative email addresses.

### Example 1 -------------------------- (Exchange Online)
```
Set-ActiveSyncOrganizationSettings -DefaultAccessLevel Quarantine -AdminMailRecipients will@contoso.com,roger@contoso.com
```

This example sets the default access level to quarantine and sets two administrative email addresses.

## PARAMETERS

### -AdminMailRecipients
!!! Exchange Server 2010

The AdminMailRecipients parameter specifies the e-mail addresses of the administrators for reporting purposes.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The AdminMailRecipients parameter specifies the email addresses of the administrators for reporting purposes.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.



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
!!! Exchange Server 2010, Exchange Server 2013

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



!!! Exchange Server 2016, Exchange Online

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

### -DefaultAccessLevel
!!! Exchange Server 2010

The DefaultAccessLevel parameter specifies whether new devices or existing devices are allowed, blocked, or quarantined.

If you use the ActiveSyncDeviceAccessRule rule to define an access group of Exchange mobile devices together with their access level for a specific set of devices, those devices are not affected by the DefaultAccessLevel parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The DefaultAccessLevel parameter specifies the access level for new devices. Valid values are Allow,Block or Quarantine. The default value is Allow.



```yaml
Type: Allow | Block | Quarantine
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

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the unique identifier for the organization.



!!! Exchange Server 2013

The Identity parameter specifies the ActiveSync organization settings object. The default name of this object is Mobile Mailbox Settings.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the ActiveSync organization settings object that you want to modify. The default name of this object is Mobile Mailbox Settings.



```yaml
Type: ActiveSyncOrganizationSettingsIdParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: ActiveSyncOrganizationSettingsIdParameter
Parameter Sets: Set2, Set3, Set4, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -OtaNotificationMailInsert
!!! Exchange Server 2010

The OtaNotificationMailInsert parameter specifies a string of information to be stored and included within an e-mail message to users with Windows Mobile 6.1 devices, in the event that the devices need to update their Microsoft Outlook Mobile software to use the new Exchange ActiveSync features in Microsoft Exchange Server 2010.



!!! Exchange Server 2013

The OtaNotificationMailInsert parameter specifies a string of information to be stored and included within an email message to users with Windows Mobile 6.1 devices in the event that the devices need to update their MicrosoftOutlook Mobile software to use the new Exchange ActiveSync features in MicrosoftExchange Server 2013.



!!! Exchange Server 2016, Exchange Online

The OtaNotificationMailInsert parameter specifies thetext to include in an email message that's sent to users who need to update their older devices to use the new Exchange ActiveSync features in Microsoft Exchange.

The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").



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

### -UserMailInsert
!!! Exchange Server 2010

The UserMailInsert parameter specifies an informational footer that's added to the e-mail message sent to users when their mobile device isn't synchronized because the device is quarantined.



!!! Exchange Server 2013

The UserMailInsert parameter specifies an informational footer that's added to the email message sent to users when their mobile device isn't synchronized because the device is quarantined.



!!! Exchange Server 2016, Exchange Online

The UserMailInsert parameter specifies an informational footer that's added to the email message sent to users when their mobile device isn't synchronized because the device is quarantined.

The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").



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

### -AllowAccessForUnSupportedPlatform
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: Set2, Set3, Set4, Set5, Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowRMSSupportForUnenlightenedApps
The AllowRMSSupportForUnenlightenedApps parameter specifies whether to allow Rights Management Services (RMS) protected messages for ActiveSync clients that don't support RMS. Valid values are:

- $true

- $false (This is the default value)

```yaml
Type: $true | $false
Parameter Sets: Set2, Set3, Set4, Set5, Set1
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

[Online Version](https://technet.microsoft.com/library/a447bf51-fcdc-4f8d-8d06-533d299c11fe.aspx)

