---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsClsScenario

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Returns information for one or more centralized logging configuration scenarios.
A scenario represents a particular Microsoft Lync Server 2013 Preview component or situation (such as IM and presence) that administrators can enable or disable for tracing.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Returns information for one or more centralized logging configuration scenarios.
A scenario represents a particular Skype for Business Server 2015 component or situation (such as IM and presence) that administrators can enable or disable for tracing.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsClsScenario [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsClsScenario [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Microsoft Lync Server 2013 Preview.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Lync Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

Information about all the centralized logging scenarios available for use in your organization can be returned by using the Get-CsClsScenario cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsClsScenario"}

Lync Server Control Panel: The functions carried out by the Get-CsClsScenario cmdlet are not available in the Lync Server Control Panel

Below Content Applies To: Skype for Business Server 2015

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server 2015.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Skype for Business Server 2015.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

Information about all the centralized logging scenarios available for use in your organization can be returned by using the Get-CsClsScenario cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Get-CsClsScenario cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the centralized logging scenarios currently in use in the organization.

Get-CsClsScenario

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the centralized logging scenarios currently in use in the organization.

Get-CsClsScenario

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns information about a single centralized logging scenario: the VoiceMail scenario included in the global settings collection.

Get-CsClsScenario -Identity "global/VoiceMail"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns information about a single centralized logging scenario: the VoiceMail scenario included in the global settings collection.

Get-CsClsScenario -Identity "global/VoiceMail"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information about all the default scenarios currently in use.
To do this, the command first calls Get-CsClsScenario without any parameters; that returns a collection of all the available scenarios.
That collection is then piped to the Where-Object cmdlet, which picks out only those scenarios that contain (-match) a Provider named "AsMcu".

Get-CsClsScenario | Where-Object {$_.Provider.Name -match "AsMcu"}

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information about all the default scenarios currently in use.
To do this, the command first calls the Get-CsClsScenario cmdlet without any parameters; that returns a collection of all the available scenarios.
That collection is then piped to the Where-Object cmdlet, which picks out only those scenarios that contain (-match) a Provider named "AsMcu".

Get-CsClsScenario | Where-Object {$_.Provider.Name -match "AsMcu"}

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, detailed information is returned for the Provider property of the global VoiceMail scenario.
To carry out this task the cmdlet first uses Get-CsClsScenario to return all the property values for the global VoiceMail scenario.
That information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Provider property.
In turn, that causes all the data stored in the Provider property to be displayed onscreen in an easy-to-read format.

Get-CsClsScenario -Identity "global/VoiceMail" | Select-Object -ExpandProperty Provider

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, detailed information is returned for the Provider property of the global VoiceMail scenario.
To carry out this task the cmdlet first uses the Get-CsClsScenario cmdlet to return all the property values for the global VoiceMail scenario.
That information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Provider property.
In turn, that causes all the data stored in the Provider property to be displayed onscreen in an easy-to-read format.

Get-CsClsScenario -Identity "global/VoiceMail" | Select-Object -ExpandProperty Provider

## PARAMETERS

### -Filter
Enables you to use wildcards in order to return one or scenarios.
For example, to return all the HybridVoice scenarios, regardless of the scope where these scenarios have been configured, use this syntax:

-Filter "*HybridVoice*"

You cannot use both the Identity parameter and the Filter parameter in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Below Content Applies To: Lync Server 2013

Unique identifier of the scenario to be returned.
A scenario consists of two parts: the scope where the scenario is configured (that is, the collection of centralized logging configuration settings where the scenario can be found) and the scenario name.
For example:

-Identity "site:Redmond/AddressBook"

You can also specify just the scenario scope; for example:

-Identity "site:Redmond"

In that case, all the scenarios configured for use on the Redmond site will be returned.

If this parameter is not specified then Get-CsClsScenario will return information about all your centralized logging scenarios.



Below Content Applies To: Skype for Business Server 2015

Unique identifier of the scenario to be returned.
A scenario consists of two parts: the scope where the scenario is configured (that is, the collection of centralized logging configuration settings where the scenario can be found) and the scenario name.
For example:

-Identity "site:Redmond/AddressBook"

You can also specify just the scenario scope; for example:

-Identity "site:Redmond"

In that case, all the scenarios configured for use on the Redmond site will be returned.

If this parameter is not specified then the Get-CsClsScenario cmdlet will return information about all your centralized logging scenarios.



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

### -LocalStore
Retrieves the scenario data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsScenario does not accept pipelined input.

###  
None.
The Get-CsClsScenario cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsScenario returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Scenario#Decorated object.

###  
The Get-CsClsScenario cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Scenario#Decorated object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8f0c5f52-c000-4e27-82a2-534a50b11a98(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8f0c5f52-c000-4e27-82a2-534a50b11a98(OCS.16).aspx)

