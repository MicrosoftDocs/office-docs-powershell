---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-IRMConfiguration
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-IRMConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-IRMConfiguration cmdlet to configure Information Rights Management (IRM) features on your organization.

Configuring and using IRM features in an on-premises Exchange organization requires Active Directory Rights Management Services (AD RMS).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-IRMConfiguration [-AutomaticServiceUpdateEnabled <$true | $false>] [-AzureRMSLicensingEnabled <$true | $false>]
 [-ClientAccessServerEnabled <$true | $false>] [-Confirm] [-DecryptAttachmentForEncryptOnly <$true | $false>]
 [-DecryptAttachmentFromPortal <$true | $false>] [-DomainController <Fqdn>]
 [-EDiscoverySuperUserEnabled <$true | $false>] [-ExternalLicensingEnabled <$true | $false>] [-Force]
 [-InternalLicensingEnabled <$true | $false>] [-JournalReportDecryptionEnabled <$true | $false>]
 [-LicensingLocation <MultiValuedProperty>] [-PublishingLocation <Uri>] [-RefreshServerCertificates]
 [-RMSOnlineKeySharingLocation <Uri>] [-SearchEnabled <$true | $false>] [-ServiceLocation <Uri>]
 [-SimplifiedClientAccessEnabled <$true | $false>]
 [-TransportDecryptionSetting <Disabled | Optional | Mandatory>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
IRM requires the use of an on-premises AD RMS server or the ILS service. IRM features can be selectively enabled or disabled.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-IRMConfiguration -JournalReportDecryptionEnabled $true
```

This example enables journal report decryption.

### -------------------------- Example 2 --------------------------
```
Set-IRMConfiguration -TransportDecryptionSetting Mandatory
```

This example enables transport decryption and enforces decryption. When decryption is enforced, messages that can't be decrypted are rejected, and an NDR is returned.

### -------------------------- Example 3 --------------------------
```
Set-IRMConfiguration -ExternalLicensingEnabled $true
```

This example enables licensing for external messages.

## PARAMETERS

### -AutomaticServiceUpdateEnabled
This parameter is available only in the cloud-based service.

The AutomaticServiceUpdateEnabled parameter specifies whether to automatically enable the protection features in Azure Information Protection for your cloud-based organization. Valid values are:

- $true: Starting July 1, 2018, the protection features in Azure Information Protection will be automatically enabled in your cloud-based organization. This means you can can start using the new Office 365 Message Encryption capabilities without additional set up steps. This is the default value.

- $false: If you're using Active Directory Rights Management Services (AD RMS) in your on-premises environment, you must use this value to prevent the automatic enabling of the protection features in Azure Information Protection for your cloud-based organization. 

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AzureRMSLicensingEnabled
This parameter is available only in the cloud-based service.

The AzureRMSLicensingEnabled parameter specifies whether the Exchange Online organization can to connect directly to Azure Rights Management. Valid values are:

- $true: The Exchange Online organization can connect directly to Azure Rights Management. This enables Office 365 Message Encryption.

- $false: The Exchange Online organization can't connect directly to Azure Rights Management. Do not configure this value unless you're directed to do so by Microsoft Customer Service and Support.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAccessServerEnabled
The ClientAccessServerEnabled parameter specifies whether to enable IRM for Outlook on the web (formerly known as Outlook Web App) and Exchange ActiveSync. Valid values are:

- $true: IRM is enabled for Outlook on the web and Exchange ActiveSync. This is the default value. Note that enabling IRM in Outlook on the web requires additional configuration on AD RMS servers. For more information, see Information Rights Management in Outlook Web App (https://technet.microsoft.com/library/dd876891.aspx).

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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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

### -EDiscoverySuperUserEnabled
The EDiscoverySuperUserEnabled parameter specifies whether members of the Discovery Management role group can access IRM-protected messages in a discovery mailbox that were returned by a discovery search. Valid values are:

- $true: Members of the Discovery Management role group can access IRM-protected messages in discovery mailboxes.

- $false: Members of the Discovery Management role group can't access IRM-protected messages in discovery mailboxes.

For more information about In-Place eDiscovery and IRM-protected messages, see In-Place eDiscovery (https://technet.microsoft.com/library/dd298021.aspx).

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

### -DecryptAttachmentForEncryptOnly
This parameter is available only in the cloud-based service.

The DecryptAttachmentForEncryptOnly parameter specifies whether mail recipients have unrestricted rights on the attachment or not for Encrypt-only mails sent using new Office 365 Message Encryption capabilities. Valid values are:

- $true: The recipients will have unrestricted rights on attachments sent using Encrypt-Only policy.

- $false: The recipients will not have unrestricted rights on attachments sent using Encrypt-Only policy.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DecryptAttachmentFromPortal
This parameter is available only in the cloud-based service.

The DecryptAttachmentFromPortal parameter specifies whether Office attachments are protected for recipients outside of Office 365 when Encrypt-only policy is used for sending mails using new Office 365 Message Encryption capabilities. Use this option when you don't need to retain the original protection for the attachment upon download. Valid values are:

- $true: The recipients will have permissions to download Encrypt-only attachments without protection.

- $false: The recipients will continue to have Encrypt-only attachments protected even after download.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalLicensingEnabled
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
The JournalReportDecryptionEnabled parameter specifies whether to enable journal report decryption. Valid values are:

- $true: Journal report encryption is enabled. A decrypted copy of the IRM-protected message is attached to the journal report. This is the default value. Note that journal report decryption requires additional configuration on AD RMS servers. For more information, see Journal report decryption (https://technet.microsoft.com/library/dd876936.aspx).

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
This parameter is available only in the cloud-based service.

The PublishingLocation parameter specifies the AD RMS publishing URL.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshServerCertificates
This parameter is available only in on-premises Exchange.

The RefreshServerCertificates switch clears all Rights Account Certificates (RACs), Computer Licensor Certificates (CLCs), and cached AD RMS templates from all Exchange servers in the organization. You don't need to specify a value with this switch.

Clearing RACs, CLCs, and cached templates might be required during troubleshooting or after changing keys on the AD RMS cluster in your organization. For more information about RACs and CLCs, see Understanding AD RMS Certificates (https://go.microsoft.com/fwlink/p/?linkId=197118).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RMSOnlineKeySharingLocation
This parameter is available only in the cloud-based service.

The RMSOnlineKeySharingLocation parameter specifies the Azure Rights Management URL that's used to get the trusted publishing domain (TPD) for the Exchange Online organization.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchEnabled
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
This parameter is available only in the cloud-based service.

The ServiceLocation parameter specifies the AD RMS service URL.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransportDecryptionSetting
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
Aliases: wi
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

[Online Version](https://technet.microsoft.com/library/5df0b56a-7bcc-4be2-b4b8-4de16720476c.aspx)
