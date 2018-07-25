---
title: "Exchange cmdlet syntax"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 11/30/2015
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 85ffe9c8-7f03-4877-8e55-3cbd40228d84
description: "Learn about the structure and syntax of cmdlets in Exchange, Exchange Online, Exchange Online Protection, and the Office 365 Security & Compliance Center."
---

# Exchange cmdlet syntax
Exchange cmdlet reference topics use a standardized method that describes key aspects about the cmdlet. For example:
  
- Parameters that are available on the cmdlet.
    
- Values that each parameter accepts.
    
- Parameters that can be used together, and parameters that need to be used separately.
    
This topic explains these conventions, and also the syntax that's required to run commands in Exchange PowerShell.
  
## Command conventions in Exchange PowerShell
Exchange PowerShell help follows conventions that indicate what's required or optional, and how to enter parameters and values when you run a command. These command conventions are listed in the following table.
  
|**Symbol**|**Description**|
|:-----|:-----|
|-|A hyphen indicates a parameter. For example, `-Identity`.|
|\< \>|Angle brackets indicate the possible values for a parameter. For example, `-Location <ServerName>` or `-Enabled <$true | $false>`.|
|[ ]|Square brackets indicate optional parameters and their values. For example, `[-WhatIf <SwitchParameter>]`. Parameter-value pairs that aren't enclosed in square brackets are required.|
|\| |Pipe symbols in parameter values indicate a choice between values. For example, `-Enabled <$true | $false>` indicates the _Enabled_ parameter can have the value `$true` or `$false`.|
   
These command conventions help you understand how a command is constructed. With the exception of the hyphen that indicates a parameter, you don't use these symbols as they're described in the table when you run cmdlets in Exchange PowerShell. 
  
## Parameter sets in Exchange PowerShell
Parameter sets are groups of parameters that can be used with each other in the same command. Parameters that exist different parameter sets are mutually exclusive (they can't be used together in the same command).
  
Many cmdlets have only one parameter set, which means that all available parameters can be used with each other. Other cmdlets have several parameter sets, which indicates some parameters perform functions that are incompatible with other parameters. For example, suppose the following parameter sets are available on the **New-SystemMessage** cmdlet:
  
```
New-SystemMessage -DsnCode <EnhancedStatusCode> -Internal <$true | $false> -Language <CultureInfo> -Text <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]  <COMMON PARAMETERS>
 
New-SystemMessage -Language <CultureInfo> -QuotaMessageType <WarningMailboxUnlimitedSize | WarningPublicFolderUnlimitedSize | WarningMailbox | WarningPublicFolder | ProhibitSendMailbox | ProhibitPostPublicFolder | ProhibitSendReceiveMailBox> -Text <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]] <COMMON PARAMETERS>
```

This cmdlet has two separate parameter sets. This indicates that you can use these parameters together in the same command:
  
- _DsnCode_

- _Internal_
    
- _Language_
    
- _Text_

- _Confirm_

- _DomainController_

- _WhatIf_
    
And you can use these parameters together in the same command:
  
- _Language_
    
- _QuotaMessageType_
    
- _Text_

- _Confirm_

- _DomainController_

- _WhatIf_
    
But you can't use these parameters together in the same command:
  
- _DsnCode_ and _QuotaMessageType_.
    
- _Internal_ and _QuotaMessageType_.
    
The `<COMMON PARAMETERS>` entry indicates the cmdlet supports the basic Windows PowerShell parameters that are available on virtually any cmdlet (for example, _Debug_). You can use common parameters with parameters from any parameter set. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).
  
## Quotation marks in Exchange PowerShell
In Exchange PowerShell, you use single quotation marks ( ' ) or double quotation marks ( " ) to enclose parameter values that contain spaces. For example, the following commands behave the same:
  
- `Get-ReceiveConnector -Identity "Contoso Receive Connector"`
    
- `Get-ReceiveConnector -Identity 'Contoso Receive Connector'`
    
If you don't enclose the value `Contoso Receive Connector` in quotes, Exchange PowerShell tries to treat each word as a new argument, and the command will fail. In this example, you'll receive an error that looks like this:
  
 `A positional parameter cannot be found that accepts argument 'Receive'`
  
If the value contains variables, you need choose carefully between single quotes and double quotes. For example, suppose you have a variable named `$Server` that has the value `Mailbox01`.
  
- **Double quotation marks**: Variables are substituted with their values. The input **"$Server Example"** results in the output `Mailbox01 Example`.
    
- **Single quotation marks**: Variables are treated literally. The input **'$Server Example'** results in the output `$Server Example`.
    
For more information about variables, see [User-Defined Variables](https://technet.microsoft.com/library/8af62634-2e0b-4da0-ae94-a890f6f24d8a.aspx) and [Shell Variables](https://technet.microsoft.com/library/a601c3d9-534d-4155-9a8e-73ef2c2229f2.aspx).
  
## Escape characters in Exchange PowerShell
In any programming language, an escape character is used to identify special characters literally, and not by their normal function in that language. In Exchange PowerShell, when you enclose a text string in double quotation marks, the escape character is the back quotation mark escape character ( \` ).
  
For example, if you want the output `The price is $23`, enter the value  **"The price is \`$23"**. The escape character is required because the dollar sign character ( $ ) defines variables in Exchange PowerShell.
  
If you enclose the string in single quotation marks, the only special character you need to worry about is the single quotation mark character itself, which requires two single quotation marks (  '' ).
  
 For example, if you want the output `Don't confuse two single quotation marks with a double quotation mark!`, enter the value  **'Don''t confuse two single quotation marks with a double quotation mark!'**.
  
## Command operators in Exchange PowerShell
The following table shows the valid operators that you can use in an Exchange command. Some of these symbols were also described in the earlier Command conventions in Exchange PowerShell section. However, these symbols have different meanings when they're used on the command line as operators. For example, the minus sign that's used to indicate a parameter can also be used in a command as a mathematical operator.
  
|**Operator**|**Description**|
|:-----|:-----|
|**=** | The equal sign is used as an assignment character. The value on the right side of the equal sign is assigned to the variable on the left side of the equal sign. The following characters are also assignment characters: <br/> **+=** Add the value on the right side of the equal sign to the current value that's contained in the variable on the left side of the equal sign. <br/> **-=** Subtract the value on the right side of the equal sign from the current value that's contained in the variable on the left side of the equal sign. <br/> **\*=** Multiply the current value of the variable on the left side of the equal sign by the value that's specified on the right side of the equal sign. <br/> **/=** Divide the current value of the variable on the left side of the equal sign by the value that's specified on the right side of the equal sign. <br/> **%=** Modify the current value of the variable on the left side of the equal sign by the value that's specified on the right side of the equal sign. <br/> |
|**:** | A colon can be used to separate a parameter's name from the parameter's value. For example, `-Enabled:$True`. Using a colon is optional with all parameter types except switch parameters. For more information about switch parameters, see [Parameters](https://technet.microsoft.com/library/bc81f639-c822-4b2b-a692-694c43f5f57e.aspx). |
|**!**  | The exclamation point is a logical **NOT** operator. When it is used with the equal ( **=** ) sign, the combined pair means "not equal to." |
|**[ ]** | Brackets are used to specify the index value of an array position. Index values are offsets that start at zero. For example, `$Red[9]` refers to the tenth index position in the array, `$Red`. <br/> Brackets can also be used to assign a type to a variable (for example, `$A=[XML] "<Test><A>value</A></Test>"`). The following variable types are available: `Array`, `Bool`, `Byte`, `Char`, `Char[]`, `Decimal`, `Double`, `Float`, `Int`, `Int[]`, `Long`, `Long[]`, `RegEx`, `Single`, `ScriptBlock`, `String`, `Type`, and `XML.` |
|**{ }** |Braces are used to include an expression in a command. For example, `Get-Process | Where {$_.HandleCount -gt 400}` |
|**\|** |The pipe symbol is used when one cmdlet pipes a result to another cmdlet. For example, Get-Mailbox -Server SRV1 \| Set-Mailbox -ProhibitSendQuota 2GB. |
|**\>**  |The right-angle bracket is used to send the output of a command to a file, and the contents of the file are overwritten. For example, `Get-TransportRulePredicate > "C:\My Documents\Output.txt"`. |
|**\>\>** |Double right-angle brackets are used to append the output of a command to an existing file. If the file doesn't exist, a new file is created. For example, `Get-TransportRulePredicate >> "C:\My Documents\Output.txt"`. |
|**"** |Double quotation marks are used to enclose text strings that contains spaces. |
|**$** |A dollar sign indicates a variable. For example, `$Blue = 10` assigns the value `10` to the variable `$Blue`. |
|**@** |The @ symbol references an associative array. For more information, see [Arrays](https://technet.microsoft.com/library/599ed6d7-553a-41be-b4a3-aa75ab9dbb5d.aspx). |
|**$( )** |A dollar sign ( `$` ) with parentheses indicates command substitution. You can use command substitution when you want to use the output of one command as an argument in another command. For example, `Get-ChildItem $(Read-Host -Prompt "Enter FileName: ")`. |
|**..** |Double-periods indicate a value range. For example, if an array contains several indexes, you can return the values of all indexes between the second and fifth indexes by running the command: `$Blue[2..5]`. |
|**+** |The **+** operator adds two values together. For example, `6 + 6` equals `12`. |
|**-** |The **-** operator subtracts one value from another value (for example, `12 - 6` equals `6`) or indicates a negative number (for example, `-6 * 6` equals `-36`). |
|**\*** |You can use the wildcard character to match strings (for example `Get-User | Where-Object {$_.Department -like 'Sales*'}`), multiply numeric values (for example, `6 * 6` equals `36`), or repeat the string value the specified number of times (for example, `"Test" * 3` equals `TestTestTest`).|
|**/** |The **/** operator divides one value by another. For example, `6 / 6` equals `1`. |
|**%** |In a numerical evaluation, the **%** operator returns the remainder from a division operator. For example, `6 % 4` equals `2`.  <br/> In a pipeline, the percent character ( `%` ) is shorthand for the **ForEach-Object** cmdlet. For example, `Import-Csv c:\MyFile.csv | ForEach-Object {Set-Mailbox $_.Identity -Name $_.Name}` is the same as `Import-Csv c:\MyFile.csv | % {Set-Mailbox $_.Identity -Name $_.Name}`. For more information, see [Pipelining](https://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx).  <br/> |
|**?** |The question mark character ( **?** ) is shorthand for the **Where-Object** cmdlet. For example, `Get-Alias | Where-Object {$_.Definition -eq "Clear-Host"}` is the same as `Get-Alias | ? {$_.Definition -eq "Clear-Host"}`. |
   

