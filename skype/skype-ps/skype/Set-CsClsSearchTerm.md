---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsClsSearchTerm

## SYNOPSIS
Modifies one or more centralized logging search terms.
Search terms help define the personally identifiable information available to technical support personnel who are searching the centralized trace logs.
Search terms are intended for use with Skype for Business Online.


## SYNTAX

### Identity
```
Set-CsClsSearchTerm [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-Inserts <String>] [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsClsSearchTerm [-Confirm] [-Force] [-Inserts <String>] [-Instance <PSObject>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the `Search-CsClsLogging` cmdlet.

In Skype for Business Online, administrators can use search terms to mask personally identifiable information from support personnel who are viewing the log files.
For example, a user's name, such as Ken Myer, would not appear when viewed using the support console; instead, the name might appear as FIRST1 LAST1.
Likewise, the phone number +12065551219 might be displayed as PHONE1.

The `Set-CsClsSearchTerm` cmdlet enables you to modify any of the search terms currently assigned to a collection of centralized logging configuration settings.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsClsSearchTerm` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsClsSearchTerm -Identity "site:Redmond/IP" -Inserts "ItemURI"
```

The command shown in sets the Inserts property for the search term "site:Redmond/IP".
In this example, a single Insert is configured: ItemURI.


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier of the search term to be modified.
A search term consists of two parts: the scope where the term is configured (that is, the collection of centralized logging configuration settings where the term can be found) and the term name.
For example:

`-Identity "site:Redmond/CallID"`

You cannot use wildcards when specifying the Identity.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Inserts
Specify how personally identifiable information is masked when viewing the log files.
For example, the Insert "ItemURI" indicates that user URI information should be masked.
As a result, a user URI such as sip:kenmyer@litwareinc.com will appear as a generic URI that hides the user name but preserve the domain name:

Sip:USER1@litwareinc.com

Inserts mask such things as user names and computer names; phone numbers; and IP addresses.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015

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
The `Set-CsClsSearchTerm` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SearchTerm#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Set-CsClsSearchTerm` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SearchTerm#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsClsSearchTerm]()
