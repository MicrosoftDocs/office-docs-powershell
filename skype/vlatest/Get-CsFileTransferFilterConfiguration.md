---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsFileTransferFilterConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns the file transfer filter configurations in your organization.
These configurations are used to block a user's ability to transfer certain types of files (for example, files with a .vbs or .ps1 file extension) using a Microsoft Lync Server 2010 client.

**Below Content Applies To:** Lync Server 2013

Returns the file transfer filter configurations in your organization.
These configurations are used to block a user's ability to transfer certain types of files (for example, files with a .vbs or .ps1 file extension) using a Lync Server client.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns the file transfer filter configurations in your organization.
These configurations are used to block a user's ability to transfer certain types of files (for example, files with a .vbs or .ps1 file extension) using a Skype for Business Server 2015 client.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsFileTransferFilterConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsFileTransferFilterConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When sending instant messages, users can attach and send files to the other participants in the conversation.
Lync Server 2010 can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent using the Lync Server 2010 client.

The Get-CsFileTransferFilterConfiguration cmdlet provides a way for you to retrieve a particular collection of settings (these settings can be configured at the global scope or at the site scope).
File transfer filter configurations include the list of file extensions that are blocked from transfers, to what degree filtering is enabled (all file transfers are blocked or only files with the specified extensions), and whether file transfer filtering is enabled.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsFileTransferFilterConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsFileTransferFilterConfiguration"}

**Below Content Applies To:** Lync Server 2013

When sending instant messages, users can attach and send files to the other participants in the conversation.
Lync Server can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent using the Lync client.

The Get-CsFileTransferFilterConfiguration cmdlet provides a way for you to retrieve a particular collection of settings (these settings can be configured at the global scope or at the site scope).
File transfer filter configurations include the list of file extensions that are blocked from transfers, to what degree filtering is enabled (all file transfers are blocked or only files with the specified extensions), and whether file transfer filtering is enabled.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsFileTransferFilterConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsFileTransferFilterConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

When sending instant messages, users can attach and send files to the other participants in the conversation.
Skype for Business Server 2015 can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent using the Skype for Business Server 2015 client.

The Get-CsFileTransferFilterConfiguration cmdlet provides a way for you to retrieve a particular collection of settings (these settings can be configured at the global scope or at the site scope).
File transfer filter configurations include the list of file extensions that are blocked from transfers, to what degree filtering is enabled (all file transfers are blocked or only files with the specified extensions), and whether file transfer filtering is enabled.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsFileTransferFilterConfiguration
```

The command shown in Example 1 returns a collection of all the file transfer filter configurations in use in your organization.
This is the default behavior any time you call Get-CsFileTransferFilterConfiguration without any additional parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns a collection of all the file transfer filter configurations in use in your organization.
This is the default behavior any time you call Get-CsFileTransferFilterConfiguration without any additional parameters.

Get-CsFileTransferFilterConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns a collection of all the file transfer filter configurations in use in your organization.
This is the default behavior any time you call the Get-CsFileTransferFilterConfiguration cmdlet without any additional parameters.

Get-CsFileTransferFilterConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsFileTransferFilterConfiguration -Identity site:Redmond
```

The preceding example returns a single file transfer filter configuration: the configuration that has the Identity site:Redmond.
Because identities must be unique, this command can never return more than one configuration.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns a single file transfer filter configuration: the configuration that has the Identity site:Redmond.
Because identities must be unique, this command can never return more than one configuration.

Get-CsFileTransferFilterConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns a single file transfer filter configuration: the configuration that has the Identity site:Redmond.
Because identities must be unique, this command can never return more than one configuration.

Get-CsFileTransferFilterConfiguration -Identity site:Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsFileTransferFilterConfiguration -Filter site:*
```

Example 3 uses the Filter parameter to return a collection of all the file transfer filter configurations at the site level.
The Filter value "site:*" instructs Get-CsFileTransferFilterConfiguration to return only those configurations that have an Identity that begins with the string value "site:".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 uses the Filter parameter to return a collection of all the file transfer filter configurations at the site level.
The Filter value "site:*" instructs Get-CsFileTransferFilterConfiguration to return only those configurations that have an Identity that begins with the string value "site:".

Get-CsFileTransferFilterConfiguration -Filter site:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 uses the Filter parameter to return a collection of all the file transfer filter configurations at the site level.
The Filter value "site:*" instructs the Get-CsFileTransferFilterConfiguration cmdlet to return only those configurations that have an Identity that begins with the string value "site:".

Get-CsFileTransferFilterConfiguration -Filter site:*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsFileTransferFilterConfiguration | Where-Object {$_.Extensions -contains ".xls"}
```

The command shown in Example 4 returns only those file transfer filter configurations that include .xls in their list of prohibited file extensions.
To do this, Get-CsFileTransferFilterConfiguration is first used to return a collection of all the configurations in use in your organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that restricts the returned data to those configurations where the Extensions property includes (-contains) the string value ".xls".

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns only those file transfer filter configurations that include .xls in their list of prohibited file extensions.
To do this, Get-CsFileTransferFilterConfiguration is first used to return a collection of all the configurations in use in your organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that restricts the returned data to those configurations where the Extensions property includes (-contains) the string value ".xls".

Get-CsFileTransferFilterConfiguration | Where-Object {$_.Extensions -contains ".xls"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns only those file transfer filter configurations that include .xls in their list of prohibited file extensions.
To do this, the Get-CsFileTransferFilterConfiguration cmdlet is first used to return a collection of all the configurations in use in your organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that restricts the returned data to those configurations where the Extensions property includes (-contains) the string value ".xls".

Get-CsFileTransferFilterConfiguration | Where-Object {$_.Extensions -contains ".xls"}

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsFileTransferFilterConfiguration | Where-Object {$_.Enabled -eq $False}
```

The preceding command returns all the file transfer filter configurations that are currently disabled.
To accomplish this task, Get-CsFileTransferFilterConfiguration is used to return a collection of all the configurations in use in your organization.
This collection is then piped to the Where-Object cmdlet, which, in turn, selects only those configuration where the Enabled property is equal to (-eq) True ($True).

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 returns all the file transfer filter configurations that are currently disabled.
To accomplish this task, Get-CsFileTransferFilterConfiguration is used to return a collection of all the configurations in use in your organization.
This collection is then piped to the Where-Object cmdlet, which, in turn, selects only those configuration where the Enabled property is equal to (-eq) True ($True).

Get-CsFileTransferFilterConfiguration | Where-Object {$_.Enabled -eq $False}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 returns all the file transfer filter configurations that are currently disabled.
To accomplish this task, the Get-CsFileTransferFilterConfiguration cmdlet is used to return a collection of all the configurations in use in your organization.
This collection is then piped to the Where-Object cmdlet, which, in turn, selects only those configuration where the Enabled property is equal to (-eq) False ($False).

Get-CsFileTransferFilterConfiguration | Where-Object {$_.Enabled -eq $False}

### -------------------------- Example 6 -------------------------- (Lync Server 2010)
```
Get-CsFileTransferFilterConfiguration -Identity Global | Select-Object -ExpandProperty Extensions
```

Example 6 shows a complete list of the file extensions prohibited by the global file transfer filter configuration.
The command begins with a call to the Get-CsFileTransferFilterConfiguration cmdlet, specifying the Global configuration.
The returned information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Extensions property.
That results in the complete list of file extensions being displayed on the screen, one file extension per line.

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

Example 6 shows a complete list of the file extensions prohibited by the global file transfer filter configuration.
The command begins with a call to the Get-CsFileTransferFilterConfiguration cmdlet, specifying the Global configuration.
The returned information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Extensions property.
That results in the complete list of file extensions being displayed on the screen, one file extension per line.

Get-CsFileTransferFilterConfiguration -Identity Global | Select-Object -ExpandProperty Extensions

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

Example 6 shows a complete list of the file extensions prohibited by the global file transfer filter configuration.
The command begins with a call to the Get-CsFileTransferFilterConfiguration cmdlet, specifying the Global configuration.
The returned information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Extensions property.
That results in the complete list of file extensions being displayed on the screen, one file extension per line.

Get-CsFileTransferFilterConfiguration -Identity Global | Select-Object -ExpandProperty Extensions

## PARAMETERS

### -Identity
Unique identifier for the file transfer filter configuration you want to retrieve.
To refer to the global settings, use this syntax: -Identity global.
To refer to settings configured at the site scope, use syntax similar to this: -Identity site:Redmond.
Note that you cannot use wildcard values when specifying an Identity.
If you want to use wildcards, use the Filter parameter instead.

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
Enables you to use wildcards when specifying the file transfer filter configurations to be returned.
For example, to return all the file transfer filter configurations at the site scope, use this syntax: -Filter "site:*".
By design, file transfer filter configurations that have an Identity (the only property you can filter for) that begins with the string value "site:" were configured at the site scope.

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
Retrieves the file transfer filter configuration from the local replica of the Central Management store, rather than the Central Management store itself.

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

## OUTPUTS

###  
Get-CsFileTransferFilterConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.FileTransferFilterConfiguration object.

###  
The Get-CsFileTransferFilterConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.FileTransferFilterConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6f43c203-acd6-4dbf-a071-752bf0c1727c(OCS.14).aspx)

[New-CsFileTransferFilterConfiguration]()

[Remove-CsFileTransferFilterConfiguration]()

[Set-CsFileTransferFilterConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/6f43c203-acd6-4dbf-a071-752bf0c1727c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6f43c203-acd6-4dbf-a071-752bf0c1727c(OCS.16).aspx)

