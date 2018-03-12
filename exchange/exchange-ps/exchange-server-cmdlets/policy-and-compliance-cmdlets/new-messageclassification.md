---
title: "New-MessageClassification"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: be73fade-7071-41f0-aa51-458bc215f90e

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-MessageClassification

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-MessageClassification** cmdlet to create a message classification instance in your organization.
  
```
New-MessageClassification [-ClassificationID <Guid>] [-DisplayPrecedence <Highest | Higher | High | MediumHigh | Medium | MediumLow | Low | Lower | Lowest>] [-PermissionMenuVisible <$true | $false>] [-RetainClassificationEnabled <$true | $false>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the message classification named  `MyMessageClassification` with the following properties:
  
- The display name is  `New Message Classification`.
    
- The sender description is " `This is the description text`".
    
```
New-MessageClassification -Name MyMessageClassification -DisplayName "New Message Classification" -SenderDescription "This is the description text"
```

### Example 2

This example creates a locale-specific (Spanish - Spain) version of an existing message classification  `MyMessageClassification`.
  
```
New-MessageClassification MyMessageClassification -Locale es-ES -DisplayName "España Example" -SenderDescription "Este es el texto de la descripción"
```

## Detailed Description
<a name="DetailedDescription"> </a>

After you create a new message classification, you can specify the message classification as a transport rule predicate. Before Microsoft Outlook and Outlook on the web users can apply the message classification to messages, you need to update the end-user systems with the message classification XML file created by the  `Export-OutlookClassification.ps1` script file. The `Export-OutlookClassification.ps1` script file is located in the `%ExchangeInstallPath%Scripts` directory.
  
When you create a message classification, it has no locale. By default, the new message classification is used for all locales. After a default message classification is defined, you can add new locales of the classification by running the **New-MessageClassification** cmdlet and by specifying the default message classification identity that you want to localize.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DisplayName_ <br/> |Required  <br/> |System.String  <br/> |The _DisplayName_ parameter specifies the display name for the message classification instance. The display name is used by Outlook users to select the appropriate message classification before they send a message. <br/> > [!NOTE]> The message classification XML file must be present on the sender's computer for the display name to be displayed.           If the _UserDisplayEnabled_ parameter is set to `$true`, the display name is displayed for the recipient, even if no message classification XML file is installed.  <br/> When you specify a name that includes spaces, you must enclose the name in quotation marks ("), for example,  `"Display Name"`. The _DisplayName_ parameter can contain a maximum of 64 characters. <br/> |
| _Locale_ <br/> |Required  <br/> |System.Globalization.CultureInfo  <br/> |The _Locale_ parameter specifies a locale-specific version of the message classification. You must also pass the _Identity_ parameter of the default existing message classification when you create a new locale-specific version. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the administrative name for the message classification instance. The name is used to administer the message classification instance. When you specify a name that includes spaces, you must enclose the name in quotation marks ("), for example, `"Adminstrative Name"`. The _Name_ parameter can contain a maximum of 256 characters. <br/> |
| _SenderDescription_ <br/> |Required  <br/> |System.String  <br/> |The _SenderDescription_ parameter specifies the purpose of the message classification to the sender. The value of this parameter is used by Outlook users to select the appropriate message classification before they send a message. Enclose the value in quotation marks ("), for example, `"This is the sender description that explains when to use this message classification"`. The _SenderDescription_ parameter can contain a maximum of 1,024 characters. <br/> |
| _ClassificationID_ <br/> |Optional  <br/> |System.Guid  <br/> |The _ClassificationID_ parameter specifies a classification ID of an existing message classification that you want to import and use in your Exchange organization. Use this parameter if you're configuring message classifications that span two Exchange forests in the same enterprise. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayPrecedence_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ClassificationDisplayPrecedenceLevel  <br/> |The _DisplayPrecedence_ parameter specifies the relative precedence of the message classification to other message classifications that may be applied to a specified message. Although Outlook only lets a user specify a single classification per message, transport rules may apply other classifications to a message. The classification with the highest precedence is shown first, and the subsequent classifications, which are those with lesser precedence as defined by this parameter, are appended in the appropriate order thereafter. <br/> Valid input for the _DisplayPrecedence_ parameter is `Highest`,  `Higher`,  `High`,  `MediumHigh`,  `Medium`,  `MediumLow`,  `Low`,  `Lower`, and  `Lowest`.  <br/> The default value is  `Medium`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _PermissionMenuVisible_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _PermissionMenuVisible_ parameter specifies whether the values that you entered for the _DisplayName_ and _RecipientDescription_ parameters are displayed in Outlook as the user composes a message. <br/> If you set the _PermissionMenuVisible_ parameter to `$false`, users won't be able to assign this message classification to the messages they are composing. However, messages received with this message classification still display the classification information.  <br/> The default value is  `$true`.  <br/> |
| _RecipientDescription_ <br/> |Optional  <br/> |System.String  <br/> |The _RecipientDescription_ parameter specifies the purpose of the message classification to the recipient. The value of this parameter is shown to Outlook users when they receive a message that has this message classification. Enclose the value in quotation marks ("), for example, `"This is the recipient description that explains how to treat the message that has been classified"`. The _RecipientDescription_ parameter can contain a maximum of 1,024 characters. <br/> If you don't enter a value for this parameter, the description that you enter for the _SenderDescription_ parameter is used. <br/> |
| _RetainClassificationEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _RetainClassificationEnabled_ parameter specifies whether the message classification should persist with the message if the message is forwarded or replied to. <br/> The default value is  `$true`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

