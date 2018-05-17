---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsUICulture
schema: 2.0.0
---

# Set-CsUICulture

## SYNOPSIS
Enables you to modify the culture (that is, the language and regional settings) used by the Skype for Business Server Management Shell.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsUICulture [-Culture] <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Although Skype for Business Server is available in multiple languages, the software is not a true Multilingual User Interface (MUI) application.
Among other things, this means that the user interface for the Skype for Business Server Management Shell does not change languages any time you change the operating system language.
For example, suppose you have installed the U.S.
English version of Skype for Business Server and are also running the Windows operating system under U.S.
English.
If you change the operating system culture (that is, the language and regional settings) to Danish, the Skype for Business Server Management Shell will not automatically follow suit; instead, the Skype for Business Server Management Shell user interface (including error messages and help text) will remain in U.S.
English.
If you need to change the culture for the Skype for Business Server Management Shell, you must run the `Set-CsUICulture` cmdlet.

There are two things to keep in mind when using the `Set-CsUICulture` cmdlet.
First, the cmdlet can only be used to modify Skype for Business Server Management Shell settings on the local computer; the `Set-CsUICulture` cmdlet cannot change a remote instance of Skype for Business Server Management Shell.
This is due to the fact that all the users of a computer share the same instance of the Skype for Business Server Management Shell: allowing a remote user to change the culture would instantly change the culture for any other users of the Skype for Business Server Management Shell, including the local user.

Second, you can only set the language to U.S.
English ("en-US") or to the language used when you initially installed Skype for Business Server ("default").
For example, if you originally installed an Italian version of Skype for Business Server, then you have two choices for configuring the UI culture: English or Italian.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsUICulture -Culture "en-US"
```

The command shown in Example 1 sets the culture for the Lync Server Management Shell to U.S.
English.
This is done by using the language code en-US.


### -------------------------- Example 2 ------------------------
```
Set-CsUICulture -Culture "default"
```

Example 2 sets the culture for the Skype for Business Server Management Shell to the default culture value.
The default value is the culture setting used when you originally installed Skype for Business Server.


## PARAMETERS

### -Culture
Enables you to specify the culture used for the Lync Server Management Shell.
Set the culture to "en-US" for U.S.
English, or set the culture to "default" to use the language used when you originally installed Skype for Business Server.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `Set-CsUICulture` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsUICulture` cmdlet does not return any values or objects.
Instead, the cmdlet modifies existing instances of the System.Globalization.CultureInfo class.

## NOTES

## RELATED LINKS

[Get-CsUICulture](Get-CsUICulture.md)

