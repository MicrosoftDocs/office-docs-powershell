---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-MessageClassification
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# New-MessageClassification

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MessageClassification cmdlet to create a message classification instance in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-MessageClassification [-Name] <String> -DisplayName <String> -Locale <CultureInfo>
 -SenderDescription <String> [-Confirm] [-DomainController <Fqdn>] 
 [-RecipientDescription <String>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
New-MessageClassification [-Name] <String> -DisplayName <String> -SenderDescription <String>
 [-ClassificationID <Guid>] [-Confirm]
 [-DisplayPrecedence <Highest | Higher | High | MediumHigh | Medium | MediumLow | Low | Lower | Lowest>]
 [-DomainController <Fqdn>] [-PermissionMenuVisible <$true | $false>]
 [-RecipientDescription <String>] [-RetainClassificationEnabled <$true | $false>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
After you create a new message classification, you can specify the message classification as a transport rule predicate. Before Microsoft Outlook and Outlook on the web users can apply the message classification to messages, you need to update the end-user systems with the message classification XML file created by the Export-OutlookClassification.ps1 script file. The Export-OutlookClassification.ps1 script file is located in the %ExchangeInstallPath%Scripts directory.

When you create a message classification, it has no locale. By default, the new message classification is used for all locales. After a default message classification is defined, you can add new locales of the classification by running the New-MessageClassification cmdlet and by specifying the default message classification identity that you want to localize.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-MessageClassification -Name MyMessageClassification -DisplayName "New Message Classification" -SenderDescription "This is the description text"
```

This example creates the message classification named MyMessageClassification with the following properties:

- The display name is New Message Classification.

- The sender description is "This is the description text".

### -------------------------- Example 2 --------------------------
```
New-MessageClassification MyMessageClassification -Locale es-ES -DisplayName "España Example" -SenderDescription "Este es el texto de la descripción"
```

This example creates a locale-specific (Spanish - Spain) version of an existing message classification MyMessageClassification.

## PARAMETERS

### -DisplayName
The DisplayName parameter specifies the display name for the message classification instance. The display name is used by Outlook users to select the appropriate message classification before they send a message.

The message classification XML file must be present on the sender's computer for the display name to be displayed.

If the UserDisplayEnabled parameter is set to $true, the display name is displayed for the recipient, even if no message classification XML file is installed.

When you specify a name that includes spaces, you must enclose the name in quotation marks ("), for example, "Display Name". The DisplayName parameter can contain a maximum of 64 characters.

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

### -Locale
The Locale parameter specifies a locale-specific version of the message classification. You must also pass the Identity parameter of the default existing message classification when you create a new locale-specific version.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

```yaml
Type: CultureInfo
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the administrative name for the message classification instance. The name is used to administer the message classification instance. When you specify a name that includes spaces, you must enclose the name in quotation marks ("), for example, "Adminstrative Name". The Name parameter can contain a maximum of 256 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDescription
The SenderDescription parameter specifies the purpose of the message classification to the sender. The value of this parameter is used by Outlook users to select the appropriate message classification before they send a message. Enclose the value in quotation marks ("), for example, "This is the sender description that explains when to use this message classification". The SenderDescription parameter can contain a maximum of 1,024 characters.

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

### -ClassificationID
The ClassificationID parameter specifies a classification ID of an existing message classification that you want to import and use in your Exchange organization. Use this parameter if you're configuring message classifications that span two Exchange forests in the same enterprise.

```yaml
Type: Guid
Parameter Sets: Set1
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

### -DisplayPrecedence
The DisplayPrecedence parameter specifies the relative precedence of the message classification to other message classifications that may be applied to a specified message. Although Outlook only lets a user specify a single classification per message, transport rules may apply other classifications to a message. The classification with the highest precedence is shown first and the subsequent classifications, which are those with lesser precedence as defined by this parameter, are appended in the appropriate order thereafter.

Valid input for the DisplayPrecedence parameter is Highest, Higher, High, MediumHigh, Medium, MediumLow, Low, Lower and Lowest.

The default value is Medium.

```yaml
Type: Highest | Higher | High | MediumHigh | Medium | MediumLow | Low | Lower | Lowest
Parameter Sets: Set1
Aliases:
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

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -PermissionMenuVisible
The PermissionMenuVisible parameter specifies whether the values that you entered for the DisplayName and RecipientDescription parameters are displayed in Outlook as the user composes a message.

If you set the PermissionMenuVisible parameter to $false, users won't be able to assign this message classification to the messages they are composing. However, messages received with this message classification still display the classification information.

The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDescription
The RecipientDescription parameter specifies the purpose of the message classification to the recipient. The value of this parameter is shown to Outlook users when they receive a message that has this message classification. Enclose the value in quotation marks ("), for example, "This is the recipient description that explains how to treat the message that has been classified". The RecipientDescription parameter can contain a maximum of 1,024 characters.

If you don't enter a value for this parameter, the description that you enter for the SenderDescription parameter is used.

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

### -RetainClassificationEnabled
The RetainClassificationEnabled parameter specifies whether the message classification should persist with the message if the message is forwarded or replied to.

The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: Set1
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

[Online Version](https://technet.microsoft.com/library/be73fade-7071-41f0-aa51-458bc215f90e.aspx)
