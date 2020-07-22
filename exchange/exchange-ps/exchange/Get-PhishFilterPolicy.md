---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-phishfilterpolicy
applicable: Exchange Online, Exchange Online Protection
title: Get-PhishFilterPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Get-PhishFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-PhishFilterPolicy cmdlet to view the spoof intelligence policy and detected spoofed sending activities in your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-PhishFilterPolicy [[-Identity] <HostedConnectionFilterPolicyIdParameter>]
 [-AllowedToSpoof <String>]
 [-DecisionSetBy <DecisionSetBy>]
 [-Detailed]
 [-SpoofAllowBlockList]
 [-SpoofType <String>]
 [-WidgetData]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-PhishFilterPolicy cmdlet returns the following information:

- Sender: The true sending domain that's found in the DNS record of the source email server. If no domain is found, the source email server's IP address is shown.

- SpoofedUser: The sending email address if the domain is one of your organization's domains, or the sending domain if the domain is external.

- NumberOfMessages: The number of messages.

- NumberOfUserComplaints: The number of user complaints.

- AuthenticationResult: Indicates whether the message has passed any type of email authentication (SPF, DKIM, or DMARC) (explicit or implicit).

- LastSeen: The date when the sending email address or domain was last seen by Microsoft 365.

- DecisionSetBy: Specifies whether Microsoft 365 set the spoofing policy as allowed or not allowed to spoof, or if it was set by an admin.

- AllowedToSpoof: The three possible values are Yes (messages that contain any spoofed sender email addresses in your organization are allowed from the source email server), No (messages that contain any spoofed sender email addresses in your organization are not allowed from the source email server), and Partial (messages that contain some spoofed sender email addresses in your organization are allowed from the source email server).

- SpoofType: Indicates whether the domain is internal to your organization or external.

For more information about spoof intelligence, see [Configure spoof intelligence in EOP](https://docs.microsoft.com/microsoft-365/security/office-365-security/learn-about-spoof-intelligence).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PhishFilterPolicy -Detailed -SpoofType Internal
```

This example returns the list of senders that appear to be sending spoofed email to your organization, with the additional ConfidenceLevel and DomainPairsCountInCategory properties.

### Example 2
```powershell
$file = "C:\My Documents\Summary Spoofed Internal Domains and Senders.csv"; Get-PhishFilterPolicy -Detailed -SpoofType Internal | Export-CSV $file
```

This example exports the same list of spoofed senders to a CSV file.

## PARAMETERS

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AllowedToSpoof
The AllowedToSpoof parameter filters the results by the AllowedToSpoof property value. Valid values are:

- Yes
- No
- Partial

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DecisionSetBy
The DecisionSetBy parameter filters the results by who allowed or blocked the spoofed sender. Valid values are:

- Admin
- SpoofProtection

```yaml
Type: DecisionSetBy
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Detailed
The Detailed switch specifies whether to return detailed information in the results. You don't need to specify a value with this switch.

Specifically, this switch returns the following additional properties:

- ConfidenceLevel: Level of signals indicated by spoof intelligence that these domains may be suspicious, based on historical sending patterns and the reputation score of the domains.
- DomainPairsCountInCategory: The spoofed domains displayed are separated into two categories: suspicious domain pairs and non-suspicious domain pairs. For more information, see [this topic](https://docs.microsoft.com/microsoft-365/security/office-365-security/walkthrough-spoof-intelligence-insight).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpoofAllowBlockList
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpoofType
The SpoofType parameter filters the results by the type of spoofing. Valid values are:

- Internal
- External

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WidgetData
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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

## OUTPUTS

###  

## NOTES

## RELATED LINKS
