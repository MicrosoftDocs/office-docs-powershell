---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-irmconfiguration
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-IRMConfiguration
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-IRMConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-IRMConfiguration cmdlet to configure Information Rights Management (IRM) features on your organization.

Configuring and using IRM features in an on-premises Exchange organization requires Active Directory Rights Management Services (AD RMS).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-IRMConfiguration [-Identity <OrganizationIdParameter>]
 [-AutomaticServiceUpdateEnabled <Boolean>]
 [-AzureRMSLicensingEnabled <Boolean>]
 [-ClientAccessServerEnabled <Boolean>]
 [-Confirm]
 [-DecryptAttachmentForEncryptOnly <Boolean>]
 [-DomainController <Fqdn>]
 [-EDiscoverySuperUserEnabled <Boolean>]
 [-EnablePdfEncryption <Boolean>]
 [-ExternalLicensingEnabled <Boolean>]
 [-Force]
 [-InternalLicensingEnabled <Boolean>]
 [-JournalReportDecryptionEnabled <Boolean>]
 [-LicensingLocation <MultiValuedProperty>]
 [-RefreshServerCertificates]
 [-RMSOnlineKeySharingLocation <Uri>]
 [-SearchEnabled <Boolean>]
 [-SimplifiedClientAccessDoNotForwardDisabled <Boolean>]
 [-SimplifiedClientAccessEnabled <Boolean>]
 [-SimplifiedClientAccessEncryptOnlyDisabled <Boolean>]
 [-TransportDecryptionSetting <TransportDecryptionSetting>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
IRM requires the use of an on-premises AD RMS server or the ILS service. IRM features can be selectively enabled or disabled.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-IRMConfiguration -JournalReportDecryptionEnabled $true
```

This example enables journal report decryption.

### Example 2
```powershell
Set-IRMConfiguration -TransportDecryptionSetting Mandatory
```

This example enables transport decryption and enforces decryption. When decryption is enforced, messages that can't be decrypted are rejected, and an NDR is returned.

### Example 3
```powershell
Set-IRMConfiguration -ExternalLicensingEnabled $true
```

This example enables licensing for external messages.

## PARAMETERS

### -Identity
This parameter is available only in the cloud-based service.

The Identity parameter specifies the organization's IRM configuration object to modify. The valid value for this parameter is "ControlPoint Configuration".

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AutomaticServiceUpdateEnabled
This parameter is available only in the cloud-based service.

The AutomaticServiceUpdateEnabled parameter specifies whether to allow the automatic addition of new features within Azure Information Protection for your cloud-based organization. Valid values are:

- $true: New Azure Information Protection features announced through Microsoft 365 message center will be enabled automatically in your cloud-based organization. This is the default value.

- $false: Prevents new Azure Information Protection features from automatically being introduced into your tenant organization.

```yaml
Type: Boolean
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

- $false: The Exchange Online organization can't connect directly to Azure Rights Management.

```yaml
Type: Boolean
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
This parameter is available only in on-premises Exchange.

The ClientAccessServerEnabled parameter specifies whether Exchange Client Access servers are allowed to authenticate clients that do not have direct access to AD RMS (for example, Outlook on the web, Exchange ActiveSync or remote Outlook Anywhere clients). Valid values are:

- $true: Client Access servers are allowed to authenticate clients. This is the default value. Note that enabling IRM in Outlook on the web requires additional configuration on AD RMS servers. For more information, see [Information Rights Management in Outlook Web App](https://docs.microsoft.com/exchange/information-rights-management-in-outlook-web-app-exchange-2013-help).

- $false: Client Access servers aren't allowed to authenticate clients.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

This parameter replaces the deprecated DecryptAttachmentFromPortal parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

For more information about In-Place eDiscovery and IRM-protected messages, see [In-Place eDiscovery in Exchange Server](https://docs.microsoft.com/Exchange/policy-and-compliance/ediscovery/ediscovery).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePdfEncryption
This parameter is available only in the cloud-based service.

The EnablePdfEncryption parameter specifies whether to enable the encryption of PDF attachments using Office 365 Message Encryption (OME). Valid values are:

- $true: Messages that contain PDF attachments can be encrypted.

- $false: Messages that contain PDF attachments can't be encrypted.

```yaml
Type: Boolean
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
This parameter is available only in on-premises Exchange.

The ExternalLicensingEnabled parameter specifies whether Exchange will try to acquire licenses from clusters other than the one it is configured to use. Without this setting, if Exchange receives many messages protected with a random key, the server will devote excessive resources to validating signatures and decrypting messages, even if the keys aren't valid.

Valid values are:

- $true: Exchange will try to acquire licenses from clusters other than the one it is configured to use. This value can help prevent denial of service (DoS) attacks.

- $false: Exchange will try to acquire licenses only from clusters that it is configured to use. This is the default value. The *LicensingLocation* parameter specifies the list of allowed clusters. 

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalLicensingEnabled
**Note**: In Exchange Online, this parameter affects both internal and external messages. In on-premises Exchange, this parameter only affects internal messages.

The InternalLicensingEnabled parameter specifies whether to enable IRM features for messages that are sent to internal recipients. Valid values are:

- $true: IRM features are enabled for internal messages. This is the default value in Exchange Online.

- $false: IRM features are disabled for internal messages. This is the default value in on-premises Exchange. Note that this value causes the Get-RMSTemplate to return no AD RMS templates.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalReportDecryptionEnabled
The JournalReportDecryptionEnabled parameter specifies whether to enable journal report decryption. Valid values are:

- $true: Journal report encryption is enabled. A decrypted copy of the IRM-protected message is attached to the journal report. This is the default value. Note that journal report decryption requires additional configuration on AD RMS servers. For more information, see [Journal report decryption](https://docs.microsoft.com/exchange/journal-report-decryption-exchange-2013-help).

- $false: Journal report decryption is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshServerCertificates
This parameter is available only in on-premises Exchange.

The RefreshServerCertificates switch clears all Rights Account Certificates (RACs), Computer Licensor Certificates (CLCs), and cached AD RMS templates from all Exchange servers in the organization. You don't need to specify a value with this switch.

Clearing RACs, CLCs, and cached templates might be required during troubleshooting or after changing keys on the AD RMS cluster in your organization. For more information about RACs and CLCs, see [Understanding AD RMS Certificates](https://docs.microsoft.com/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc753886(v=ws.11)).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
The SearchEnabled parameter specifies whether to enable searching of IRM-encrypted messages in Outlook on the web (formerly known as Outlook Web App). Valid values are:

- $true: Searching IRM-encrypted messages in Outlook on the web is enabled. This is the default value.

- $false: Searching IRM-encrypted messages in Outlook on the web is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimplifiedClientAccessDoNotForwardDisabled
This parameter is available only in the cloud-based service.

The SimplifiedClientAccessDoNotForwardDisabled parameter specifies whether to disable **Do not forward** in Outlook on the web. Valid values are:

- $true: **Do not forward** is not available in Outlook on the web.

- $false: **Do not forward** is available in Outlook on the web.

```yaml
Type: Boolean
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
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimplifiedClientAccessEncryptOnlyDisabled
This parameter is available only in the cloud-based service.

The SimplifiedClientAccessEncryptOnlyDisabled parameter specifies whether to disable **Encrypt only** in Outlook on the web. Valid values are:

- $true: **Encrypt only** is not available in Outlook on the web.

- $false: **Encrypt only** is available in Outlook on the web.

```yaml
Type: Boolean
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
Type: TransportDecryptionSetting
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
