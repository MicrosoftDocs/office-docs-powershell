---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsClsSearchTerm
schema: 2.0.0
---

# Get-CsClsSearchTerm

## SYNOPSIS
Returns information about the centralized logging search terms available for use in the organization.
Search terms help define the personally identifiable information available to technical support personnel who are searching the centralized trace logs.
Search terms are intended for use with Skype for Business Online.


## SYNTAX

### Filter
```
Get-CsClsSearchTerm [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsClsSearchTerm [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

In Skype for Business Online, administrators can use search terms to mask personally identifiable information from support personnel who are viewing the log files.
For example, a user's name, such as Ken Myer, would not appear when viewed using the support console; instead, the name might appear as FIRST1 LAST1.
Likewise, the phone number +12065551219 might be displayed as PHONE1.

The Get-CsClsSearchTerm cmdlet returns information about the search terms currently available for use.
These search terms are based on the Inserts property, which specifies the information that will be masked as well as the mask that will be substituted for the personally-identifiable information.

The functions carried out by the Get-CsClsSearchTerm cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsClsSearchTerm
```

The command shown in Example 1 returns information about all the search terms currently in use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsClsSearchTerm -Identity "global/Phone"
```

In Example 2, information is returned for a single search term: the Phone search term found in the global collection of centralized logging configuration settings.

### -------------------------- Example 3 --------------------------
```
Get-CsClsSearchTerm | Where-Object {$_.Type -eq "URI"}
```

The command shown in Example 3 returns information for all the URI search terms.
To do this, the command first calls the Get-CsClsSearchTerm cmdlet without any parameters; this returns a collection of all the available search terms.
That collection is then piped to the Where-Object cmdlet, which picks out only those terms where the Type property is equal to (-eq) URI.

### -------------------------- Example 4 --------------------------
```
Get-CsClsSearchTerm | Where-Object {$_.Inserts -match "ItemE164"}
```

In Example 4 information is returned for all the search terms where the Inserts property includes the string value "ItemE164".
To carry out this task, the command first uses the Get-CsClsSearchTerm cmdlet to return a collection of all the available search terms.
That collection is then piped to the Where-Object cmdlet, which selects any term for which the Inserts property includes (-match) the string value "ItemE164".


## PARAMETERS

### -Filter
Enables you to use wildcards in order to return one or search terms.
For example, to return all the CallID search terms, regardless of the scope where these terms have been configured, use this syntax:

`-Filter "*CallID*"`

You cannot use both the Identity parameter and the Filter parameter in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier of the search term to be returned.
A search term consists of two parts: the scope where the term is configured (that is, the collection of centralized logging configuration settings where the term can be found) and the term name.
For example:

`-Identity "site:Redmond/CallID"`

You can also specify just the search term scope; for example:

`-Identity "site:Redmond"`

In that case, all the search terms configured for use on the Redmond site will be returned.

If this parameter is not specified then the Get-CsClsSearchTerm cmdlet will return information about all your centralized logging search terms.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the search term data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SearchTerm#Decorated


## NOTES


## RELATED LINKS

[Set-CsClsSearchTerm](Set-CsClsSearchTerm.md)

