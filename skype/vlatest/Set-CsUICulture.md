---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsUICulture

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Enables you to modify the culture (that is, the language and regional settings) used by the Lync Server Management Shell.

Below Content Applies To: Lync Server 2013

Enables you to modify the culture (that is, the language and regional settings) used by the Lync Server Management Shell.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Enables you to modify the culture (that is, the language and regional settings) used by the Skype for Business Server Management Shell.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsUICulture [-Culture] <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Although Microsoft Lync Server 2010 is available in multiple languages, the software is not a true Multilingual User Interface (MUI) application.
Among other things, this means that the user interface for the Lync Server Management Shell does not change languages any time you change the operating system language.
For example, suppose you have installed the U.S.
English version of Lync Server 2010 and are also running the Windows operating system under U.S.
English.
If you change the operating system culture (that is, the language and regional settings) to Danish, the Lync Server Management Shell will not automatically follow suit; instead, the Lync Server Management Shell user interface (including error messages and help text) will remain in U.S.
English.
If you need to change the culture for the Lync Server Management Shell, you must run the Set-CsUICulture cmdlet.

There are two things to keep in mind when using Set-CsUICulture.
First, the cmdlet can only be used to modify Lync Server Management Shell settings on the local computer; Set-CsUICulture cannot change a remote instance of Lync Server Management Shell.
This is due to the fact that all the users of a computer share the same instance of the Lync Server Management Shell: allowing a remote user to change the culture would instantly change the culture for any other users of the Lync Server Management Shell, including the local user.

Second, you can only set the language to U.S.
English ("en-US") or to the language used when you initially installed Lync Server ("default").
For example, if you originally installed an Italian version of Lync Server, then you have two choices for configuring the UI culture: English or Italian.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsUICulture cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.

Below Content Applies To: Lync Server 2013

Although Lync Server is available in multiple languages, the software is not a true Multilingual User Interface (MUI) application.
Among other things, this means that the user interface for the Lync Server Management Shell does not change languages any time you change the operating system language.
For example, suppose you have installed the U.S.
English version of Lync Server and are also running the Windows operating system under U.S.
English.
If you change the operating system culture (that is, the language and regional settings) to Danish, the Lync Server Management Shell will not automatically follow suit; instead, the Lync Server Management Shell user interface (including error messages and help text) will remain in U.S.
English.
If you need to change the culture for the Lync Server Management Shell, you must run the Set-CsUICulture cmdlet.

There are two things to keep in mind when using Set-CsUICulture.
First, the cmdlet can only be used to modify Lync Server Management Shell settings on the local computer; Set-CsUICulture cannot change a remote instance of Lync Server Management Shell.
This is due to the fact that all the users of a computer share the same instance of the Lync Server Management Shell: allowing a remote user to change the culture would instantly change the culture for any other users of the Lync Server Management Shell, including the local user.

Second, you can only set the language to U.S.
English ("en-US") or to the language used when you initially installed Lync Server ("default").
For example, if you originally installed an Italian version of Lync Server, then you have two choices for configuring the UI culture: English or Italian.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsUICulture cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.

Below Content Applies To: Skype for Business Server 2015

Although Skype for Business Server 2015 is available in multiple languages, the software is not a true Multilingual User Interface (MUI) application.
Among other things, this means that the user interface for the Skype for Business Server Management Shell does not change languages any time you change the operating system language.
For example, suppose you have installed the U.S.
English version of Skype for Business Server 2015 and are also running the Windows operating system under U.S.
English.
If you change the operating system culture (that is, the language and regional settings) to Danish, the Skype for Business Server Management Shell will not automatically follow suit; instead, the Skype for Business Server Management Shell user interface (including error messages and help text) will remain in U.S.
English.
If you need to change the culture for the Skype for Business Server Management Shell, you must run the Set-CsUICulture cmdlet.

There are two things to keep in mind when using the Set-CsUICulture cmdlet.
First, the cmdlet can only be used to modify Skype for Business Server Management Shell settings on the local computer; the Set-CsUICulture cmdlet cannot change a remote instance of Skype for Business Server Management Shell.
This is due to the fact that all the users of a computer share the same instance of the Skype for Business Server Management Shell: allowing a remote user to change the culture would instantly change the culture for any other users of the Skype for Business Server Management Shell, including the local user.

Second, you can only set the language to U.S.
English ("en-US") or to the language used when you initially installed Skype for Business Server 2015 ("default").
For example, if you originally installed an Italian version of Skype for Business Server 2015, then you have two choices for configuring the UI culture: English or Italian.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsUICulture -Culture "en-US"
```

The command shown in Example 1 sets the culture for the Lync Server Management Shell to U.S.
English.
This is done by using the language code en-US.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 sets the culture for the Lync Server Management Shell to U.S.
English.
This is done by using the language code en-US.

Set-CsUICulture -Culture "en-US"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 sets the culture for the Lync Server Management Shell to U.S.
English.
This is done by using the language code en-US.

Set-CsUICulture -Culture "en-US"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Set-CsUICulture -Culture "default"
```

The preceding command sets the culture for the Lync Server Management Shell to the default culture value.
The default value is the culture setting used when you originally installed Lync Server.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 sets the culture for the Lync Server Management Shell to the default culture value.
The default value is the culture setting used when you originally installed Lync Server.

Set-CsUICulture -Culture "default"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 sets the culture for the Skype for Business Server Management Shell to the default culture value.
The default value is the culture setting used when you originally installed Skype for Business Server 2015.

Set-CsUICulture -Culture "default"

## PARAMETERS

### -Culture
Below Content Applies To: Lync Server 2010

Enables you to specify the culture used for the Lync Server Management Shell.
Set the culture to "en-US" for U.S.
English, or set the culture to "default" to use the language used when you originally installed Lync Server 2010.



Below Content Applies To: Lync Server 2013

Enables you to specify the culture used for the Lync Server Management Shell.
Set the culture to "en-US" for U.S.
English, or set the culture to "default" to use the language used when you originally installed Lync Server.



Below Content Applies To: Skype for Business Server 2015

Enables you to specify the culture used for the Lync Server Management Shell.
Set the culture to "en-US" for U.S.
English, or set the culture to "default" to use the language used when you originally installed Skype for Business Server 2015.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Set-CsUICulture does not accept pipelined input.

###  
None.
The Set-CsUICulture cmdlet does not accept pipelined input.

## OUTPUTS

###  
Set-CsUICulture does not return any values or objects.
Instead, the cmdlet modifies existing instances of the System.Globalization.CultureInfo class.

###  
The Set-CsUICulture cmdlet does not return any values or objects.
Instead, the cmdlet modifies existing instances of the System.Globalization.CultureInfo class.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/53fbc126-1df9-4ea0-8055-4e9530ab89d6(OCS.14).aspx)

[Get-CsUICulture]()

[Online Version](http://technet.microsoft.com/EN-US/library/53fbc126-1df9-4ea0-8055-4e9530ab89d6(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/53fbc126-1df9-4ea0-8055-4e9530ab89d6(OCS.16).aspx)

