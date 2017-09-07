---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsWebServiceConfiguration

## SYNOPSIS
Returns information about all the Web Services configuration settings in use in your organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsWebServiceConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsWebServiceConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Many Skype for Business Server components are web-based: these components either use web services or webpages to carry out their tasks.
For example, users employ a web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Skype for Business Server Control Panel use webpages as the interface between Skype for Business Server and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization; this includes managing group expansion, certificate settings, and allowed authentication methods.
Because you can configure different settings at the global, site, and service scope (albeit for the only the Web Services service), you can customize Web Services capabilities for different users and different locations.

The Get-CsWebServiceConfiguration cmdlet enables you to return detailed information about the Web Services configuration settings currently in use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Get-CsWebServiceConfiguration
```

Example 1 returns information about all the Web Services configuration settings currently in use in the organization.


### -------------------------- Example 2 ------------------------
```
Get-CsWebServiceConfiguration -Identity site:Redmond
```

The command shown in Example 2 returns information about the Web Services configuration settings that have the Identity site:Redmond.


### -------------------------- Example 3 ------------------------
```
Get-CsWebServiceConfiguration -Filter "site:*"
```

Example 3 returns all the Web Services configuration settings that have been assigned at the site scope.
To do this, the Filter parameter is included when calling the Get-CsWebServiceConfiguration cmdlet; the filter value "site:*" ensures that only those settings that have an Identity that begins with the string value "site:" are returned.


### -------------------------- Example 4 ------------------------
```
Get-CsWebServiceConfiguration | Where-Object {$_.UsePinAuth -eq $False}
```

In Example 4, the command returns all the Web Services configuration settings that do not allow personal identification number (PIN) authentication.
This is done by first calling the Get-CsWebServiceConfiguration cmdlet to return all the Web Services configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the UsePinAuth property is equal to False.


### -------------------------- Example 5 ------------------------
```
Get-CsWebServiceConfiguration | Where-Object {$_.MaxGroupSizeToExpand -gt 100}
```

Example 5 returns all the Web Services configuration settings where the maximum group expansion size is greater than 100.
To do this, the command first uses the Get-CsWebServiceConfiguration cmdlet to return all the Web Services configuration settings currently in use.
This information is then piped to the Where-Object cmdlet, which selects only those settings where the MaxGroupSizeToExpand property is greater than 100.



## PARAMETERS

### -Identity

Unique identifier for the Web Services configuration settings to be returned.
To return the global settings, use this syntax:

-Identity global

To return settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

Service-scope settings can be returned using syntax like this:

-Identity "service:WebServer:atl-cs-001.litwareinc.com"

You cannot use both the Filter and the Identity parameters in the same command.
If you do not specify either parameter, the Get-CsWebServiceConfiguration cmdlet will return all the Web Services settings collections currently in use in your organization.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter

Enables you to use wildcards when specifying the Web Services configuration settings collection (or collections) to be returned.
For example, this syntax returns all the settings configured at the site scope:

-Filter "site:*"

You cannot use both the Filter and the Identity parameters in the same command.



```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore

Retrieves the Web Services configuration data from the local replica of the Central Management store rather than from the Central Management store itself.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
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
The Get-CsWebServiceConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsWebServiceConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Web.WebServiceSettings object.

## NOTES

## RELATED LINKS

[New-CsWebServiceConfiguration]()

[Remove-CsWebServiceConfiguration]()

[Set-CsWebServiceConfiguration]()