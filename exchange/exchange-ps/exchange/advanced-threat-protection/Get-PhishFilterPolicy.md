---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Get-PhishFilterPolicy
schema: 2.0.0
monikerRange: "exchonline-ps || eop-ps"
---

# Get-PhishFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-PhishFilterPolicy cmdlet to view the phish filter policy and detected spoofed sending activities in your cloud-based organization.

This cmdlet is only available in Office 365 Enterprise E5, or with Advanced Threat Protection licenses.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-PhishFilterPolicy -Detailed -SpoofAllowBlockList [-SpoofType <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-PhishFilterPolicy cmdlet returns the following information:

- Sender/sender domain: The true sending domain that's found in the DNS record of the source messaging server. If no domain is found, the source messaging server's IP address is shown.

- SpoofedUser: The sending email address if the domain is one of your organization's domains, or the sending domain if the domain is external.

- MailVolume: The number of messages.

- UserComplaints: The number of user complaints.

- Authentication: Indicates whether the message has passed any type of authentication (explicit or implicit).

- Last seen: The date when the sending email address or domain was last seen by Office 365.

- Decision set by: Specifies whether Office 365 set the spoofing policy as allowed or not allowed to spoof, or if it was set by an admin.

- AllowedToSpoof: The three possible values are Yes (messages that contain any spoofed sender email addresses in your organization are allowed from the source messaging server), No (messages that contain any spoofed sender email addresses in your organization are not allowed from the source messaging server), and Partial (messages that contain some spoofed sender email addresses in your organization are allowed from the source messaging server.

- Spoof Type: Indicates whether the domain is internal to your organization or external.

For more information about spoof intelligence, see Learn more about spoof intelligence (https://go.microsoft.com/fwlink/p/?linkid=869584).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-PhishFilterPolicy -Detailed -SpoofAllowBlockList -SpoofType Internal

```

This example returns a detailed list of senders that appear to be sending spoofed email to your organization.

### -------------------------- Example 2 --------------------------
```
$file = "C:\My Documents\Summary Spoofed Internal Domains and Senders.csv"; Get-PhishFilterPolicy -Detailed -SpoofAllowBlockList -SpoofType Internal | Export-CSV $file
```

This example exports the list of spoofed senders to a CSV file.

## PARAMETERS

### -Detailed
The Detailed switch specifies whether to return detailed information in the results. You don't need to specify a value with this switch.

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

### -SpoofAllowBlockList
The SpoofAllowBlockList switch specifies whether to return a summary view of detected spoof activity. You don't need to specify a value with this switch.

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

[Online Version](https://technet.microsoft.com/library/d3ef544f-de92-4563-8603-3990b8939453.aspx)
