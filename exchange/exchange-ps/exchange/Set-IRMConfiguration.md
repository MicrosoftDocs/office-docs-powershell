---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-IRMConfiguration

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-IRMConfiguration cmdlet to configure Information Rights Management (IRM) features.

Configuring and using IRM features requires Active Directory Rights Management Services (AD RMS).

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-IRMConfiguration cmdlet to configure Information Rights Management (IRM) features.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

Configuring and using IRM features in an on-premises Microsoft Exchange Server 2013 deployment requires Active Directory Rights Management Services (AD RMS).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-IRMConfiguration cmdlet to configure Information Rights Management (IRM) features on your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

Configuring and using IRM features in an on-premises Exchange organization requires Active Directory Rights Management Services (AD RMS).

## SYNTAX

```
Set-IRMConfiguration [[-Identity] <OrganizationIdParameter>] [-ClientAccessServerEnabled <$true | $false>]
 [-Confirm] [-DomainController <Fqdn>] [-EDiscoverySuperUserEnabled <$true | $false>]
 [-ExternalLicensingEnabled <$true | $false>] [-Force] [-InternalLicensingEnabled <$true | $false>]
 [-JournalReportDecryptionEnabled <$true | $false>] [-LicensingLocation <MultiValuedProperty>]
 [-PublishingLocation <Uri>] [-RefreshServerCertificates] [-SearchEnabled <$true | $false>]
 [-ServiceLocation <Uri>] [-TransportDecryptionSetting <Disabled | Optional | Mandatory>] [-WhatIf]
 [-RMSOnlineKeySharingLocation <Uri>] [-AzureRMSLicensingEnabled <$true | $false>]
 [-SimplifiedClientAccessEnabled <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

IRM requires the use of an on-premises AD RMS server or the ILS service. IRM features can be selectively enabled or disabled.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Rights protection" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

IRM requires the use of an on-premises AD RMS server or the ILS service. IRM features can be selectively enabled or disabled.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Information Rights Management (IRM) configuration" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online

IRM requires the use of an on-premises AD RMS server or the ILS service. IRM features can be selectively enabled or disabled.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-IRMConfiguration -JournalReportDecryptionEnabled $true
```

This example enables journal report decryption.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-IRMConfiguration -JournalReportDecryptionEnabled $true
```

This example enables journal report decryption.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-IRMConfiguration -JournalReportDecryptionEnabled $true
```

This example enables journal report decryption.

### Example 1 -------------------------- (Exchange Online)
```
Set-IRMConfiguration -JournalReportDecryptionEnabled $true
```

This example enables journal report decryption.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-IRMConfiguration -TransportDecryptionSetting Mandatory
```

This example enables transport decryption and enforces decryption. When decryption is enforced, messages that can't be decrypted are rejected, and an NDR is returned.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-IRMConfiguration -TransportDecryptionSetting Mandatory
```

This example enables transport decryption and enforces decryption. When decryption is enforced, messages that can't be decrypted are rejected, and an NDR is returned.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-IRMConfiguration -TransportDecryptionSetting Mandatory
```

This example enables transport decryption and enforces decryption. When decryption is enforced, messages that can't be decrypted are rejected, and an NDR is returned.

### Example 2 -------------------------- (Exchange Online)
```
Set-IRMConfiguration -TransportDecryptionSetting Mandatory
```

This example enables transport decryption and enforces decryption. When decryption is enforced, messages that can't be decrypted are rejected, and an NDR is returned.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-IRMConfiguration -ExternalLicensingEnabled $true
```

This example enables licensing for external messages.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-IRMConfiguration -ExternalLicensingEnabled $true
```

This example enables licensing for external messages.

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-IRMConfiguration -ExternalLicensingEnabled $true
```

This example enables licensing for external messages.

### Example 3 -------------------------- (Exchange Online)
```
Set-IRMConfiguration -ExternalLicensingEnabled $true
```

This example enables licensing for external messages.

## PARAMETERS

### -Identity
The Identity parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ClientAccessServerEnabled
!!! Exchange Server 2010

The ClientAccessServerEnabled parameter specifies whether to enable IRM in Microsoft Office Outlook Web App and in Microsoft Exchange ActiveSync. Both of these features are enabled by default. To disable them, set the parameter to $false.

Enabling IRM in Outlook Web App requires additional configuration on AD RMS servers. For more information, see Understanding Information Rights Management in Outlook Web App.



!!! Exchange Server 2013

The ClientAccessServerEnabled parameter specifies whether to enable IRM in Microsoft OfficeOutlook Web App and in Microsoft Exchange ActiveSync. Both of these features are enabled by default. To disable them, set the parameter to $false.

Enabling IRM in Outlook Web App requires additional configuration on AD RMS servers. For more information, see Information Rights Management in Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The ClientAccessServerEnabled parameter specifies whether to enable IRM for Outlook on the web (formerly known as Outlook Web App) and Exchange ActiveSync. Valid values are:

- $true: IRM is enabled for Outlook on the web and Exchange ActiveSync. This is the default value. Note that enabling IRM in Outlook on the web requires additional configuration on AD RMS servers. For more information, see Information Rights Management in Outlook Web App.

- $false: IRM is disabled for Outlook on the web and Exchange ActiveSync.



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

### -EDiscoverySuperUserEnabled
!!! Exchange Server 2010

The EDiscoverySuperUserEnabled parameter specifies whether members of the Discovery Management role group can access IRM-protected messages that were returned by a discovery search and are residing in a discovery mailbox. To enable IRM-protected message access to the Discovery Management role group, set the value to $true. For more information about discovery and IRM-protected messages, see Understanding Multi-Mailbox Search.



!!! Exchange Server 2013

The EDiscoverySuperUserEnabled parameter specifies whether members of the Discovery Management role group can access IRM-protected messages that were returned by a discovery search and are residing in a discovery mailbox. To enable IRM-protected message access to the Discovery Management role group, set the value to $true. For more information about In-Place eDiscovery and IRM-protected messages, see In-Place eDiscovery.



!!! Exchange Server 2016, Exchange Online

The EDiscoverySuperUserEnabled parameter specifies whether members of the Discovery Management role group can access IRM-protected messages in a discovery mailbox that were returned by a discovery search. Valid values are:

- $true: Members of the Discovery Management role group can access IRM-protected messages in discovery mailboxes.

- $false: Members of the Discovery Management role group can't access IRM-protected messages in discovery mailboxes.

For more information about In-Place eDiscovery and IRM-protected messages, see In-Place eDiscovery in Exchange 2016.



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

### -ExternalLicensingEnabled
!!! Exchange Server 2010, Exchange Server 2013

The ExternalLicensingEnabled parameter specifies whether to enable IRM features for messages sent to external recipients. In on-premises deployments, licensing is disabled for external messages by default. To enable licensing, set the value to $true.



!!! Exchange Server 2016, Exchange Online

The ExternalLicensingEnabled parameter specifies whether to enable IRM features for messages that are sent to external recipients. Valid values are:

- $true: IRM features are enabled for external messages. This is the default value in Exchange Online.

- $false: IRM features are disabled for external messages. This is the default value in on-premises Exchange.



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

### -Force
!!! Exchange Server 2010, Exchange Server 2013

The Force switch specifies whether to suppress the confirmation prompt that appears when you modify the InternalLicensingEnabled parameter.



!!! Exchange Server 2016, Exchange Online

The Force switch specifies whether to suppress the confirmation prompt that appears when you modify the InternalLicensingEnabled parameter. You don't need to specify a value with this switch.



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

### -InternalLicensingEnabled
!!! Exchange Server 2010, Exchange Server 2013

The InternalLicensingEnabled parameter specifies whether to enable IRM features for messages sent to internal recipients. In on-premises deployments, licensing is disabled for internal messages by default. To enable licensing, set the value to $true.

If the InternalLicensingEnabled parameter is set to $false, no AD RMS templates are returned when you use the Get-RMSTemplate cmdlet.



!!! Exchange Server 2016, Exchange Online

The InternalLicensingEnabled parameter specifies whether to enable IRM features for messages that are sent to internal recipients. Valid values are:

- $true: IRM features are enabled for internal messages. This is the default value in Exchange Online.

- $false: IRM features are disabled for internal messages. This is the default value in on-premises Exchange. Note that this value causes the Get-RMSTemplate to return no AD RMS templates.



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

### -JournalReportDecryptionEnabled
!!! Exchange Server 2010

The JournalReportDecryptionEnabled parameter specifies whether to enable journal report decryption. When enabled, journal report decryption attaches a decrypted copy of an IRM-protected message to the journal report. Journal report decryption is enabled by default. To disable journal report decryption, set the value to $false.

Enabling journal report decryption requires additional configuration on AD RMS servers. For more information, see Understanding Journal Report Decryption.





!!! Exchange Server 2013

The JournalReportDecryptionEnabled parameter specifies whether to enable journal report decryption. When enabled, journal report decryption attaches a decrypted copy of an IRM-protected message to the journal report. Journal report decryption is enabled by default. To disable journal report decryption, set the value to $false.

Enabling journal report decryption requires additional configuration on AD RMS servers. For more information, see Journal report decryption.





!!! Exchange Server 2016, Exchange Online

The JournalReportDecryptionEnabled parameter specifies whether to enable journal report decryption. Valid values are:

- $true: Journal report encryption is enabled. A decrypted copy of the IRM-protected message is attached to the journal report. This is the default value. Note that journal report decryption requires additional configuration on AD RMS servers. For more information, see Journal report decryption.

- $false: Journal report decryption is disabled.



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

### -LicensingLocation
!!! Exchange Server 2010

The LicensingLocation parameter specifies one or more additional AD RMS licensing URLs in on-premises deployments. It isn't required to populate this parameter if the organization doesn't have cross-forest deployment of licensing servers.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The LicensingLocation parameter specifies one or more additional AD RMS licensing URLs in on-premises deployments. It isn't required to populate this parameter if the organization doesn't have cross-forest deployment of licensing servers.



!!! Exchange Server 2016, Exchange Online

The LicensingLocation parameter specifies the RMS licensing URLs. You can specify multiple URL values separated by commas.

Typically, in on-premises Exchange, you only need to use this parameter in cross-forest deployments of AD RMS licensing servers.



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

### -PublishingLocation
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The PublishingLocation parameter specifies one or more AD RMS publishing URLs.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The PublishingLocation parameter specifies the AD RMS publishing URL.



```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshServerCertificates
!!! Exchange Server 2010

The RefreshServerCertificates switch clears all Rights Account Certificates (RACs), Computer Licensor Certificates (CLCs), and cached AD RMS templates from all Microsoft Exchange Server 2010 Hub Transport, Client Access, Mailbox, and Unified Messaging servers in the organization. Clearing RACs, CLCs, and cached templates may be required during troubleshooting or in the event of a change of keys on the AD RMS cluster in your organization. For more information about RACs and CLCs, see Understanding AD RMS Certificates (https://go.microsoft.com/fwlink/p/?linkid=197118).



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The RefreshServerCertificates switch clears all Rights Account Certificates (RACs), Computer Licensor Certificates (CLCs), and cached AD RMS templates from all Microsoft Exchange Server 2010 or Exchange Server 2013 servers in the organization. Clearing RACs, CLCs, and cached templates may be required during troubleshooting or in the event of a change of keys on the AD RMS cluster in your organization. For more information about RACs and CLCs, see Understanding AD RMS Certificates (https://go.microsoft.com/fwlink/p/?linkId=197118).



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The RefreshServerCertificates switch clears all Rights Account Certificates (RACs), Computer Licensor Certificates (CLCs), and cached AD RMS templates from all Exchange servers in the organization. You don't need to specify a value with this switch.

Clearing RACs, CLCs, and cached templates might be required during troubleshooting or after changing keys on the AD RMS cluster in your organization. For more information about RACs and CLCs, see Understanding AD RMS Certificates (https://go.microsoft.com/fwlink/p/?linkId=197118).



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

### -SearchEnabled
!!! Exchange Server 2010

The SearchEnabled parameter specifies whether to enable searching IRM-encrypted messages in Outlook Web App. Valid values include:

- $true (default) Enables search of IRM-encrypted messages in Outlook Web App.

- $false Disables search of IRM-encrypted messages in Outlook Web App.



!!! Exchange Server 2013

The SearchEnabled parameter specifies whether to enable searching of IRM-encrypted messages in Outlook Web App. Valid values include:

- $true (default) Enables search of IRM-encrypted messages in Outlook Web App.

- $false Disables search of IRM-encrypted messages in Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The SearchEnabled parameter specifies whether to enable searching of IRM-encrypted messages in Outlook on the web. Valid values are:

- $true: Searching IRM-encrypted messages in Outlook on the web is enabled. This is the default value.

- $false: Searching IRM-encrypted messages in Outlook on the web is disabled.



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

### -ServiceLocation
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The ServiceLocation parameter specifies the AD RMS service URL.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The ServiceLocation parameter specifies the AD RMS service URL.



```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportDecryptionSetting
!!! Exchange Server 2010

The TransportDecryptionSetting parameter specifies the transport decryption configuration. Valid values include one of the following:

- Disabled Transport decryption is disabled for internal and external messages.

- Mandatory Messages that can't be decrypted are rejected, and a non-delivery report (NDR) is returned.

- Optional This parameter value provides a best effort approach to decryption. Messages are decrypted if possible, but delivered even if decryption fails.



!!! Exchange Server 2013

The TransportDecryptionSetting parameter specifies the transport decryption configuration. Valid values include one of the following:

- Disabled Transport decryption is disabled for internal and external messages.

- Mandatory Messages that can't be decrypted are rejected, and a non-delivery report (NDR) is returned.

- Optional A best effort approach to decryption is provided. Messages are decrypted if possible, but delivered even if decryption fails.



!!! Exchange Server 2016, Exchange Online

The TransportDecryptionSetting parameter specifies the transport decryption configuration. Valid values are:

- Disabled: Transport decryption is disabled for internal and external messages.

- Mandatory: Messages that can't be decrypted are rejected with a non-delivery report (also known as an NDR or bounce message).

- Optional: Messages are decrypted if possible, but are delivered even if decryption fails. This is the default value.



```yaml
Type: Disabled | Optional | Mandatory
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

### -RMSOnlineKeySharingLocation
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The RMSOnlineKeySharingLocation parameter specifies the RMS Online URL to obtain the trusted publishing domain (TPD) for the Microsoft Exchange Online organization.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The RMSOnlineKeySharingLocation parameter specifies the Azure Rights Management URL that's used to get the trusted publishing domain (TPD) for the Exchange Online organization.



```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AzureRMSLicensingEnabled
This parameter is available only in the cloud-based service.

The AzureRMSLicensingEnabled parameter specifies whether the Exchange Online organization can to connect directly to Azure Rights Management. Valid values are:

- $true: The Exchange Online organization can connect directly to Azure Rights Management. This enables data encryption policies.

- $false: The Exchange Online organization can't connect directly to Azure Rights Management.

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

### -SimplifiedClientAccessEnabled
This parameter is available only in the cloud-based service.

The SimplifiedClientAccessEnabled parameter specifies whether to enable the Protect button in Outlook on the web. Valid values are:

- $true: The Protect button is enabled in Outlook on the web.

- $false: The Protect button is disabled in Outlook on the web. This is the default value.

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

[Online Version](https://technet.microsoft.com/library/5df0b56a-7bcc-4be2-b4b8-4de16720476c.aspx)

