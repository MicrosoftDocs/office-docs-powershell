---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsFileTransferFilterConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified instant message file transfer filter configuration.
(Instant message file transfer filter settings are used to block a user's ability to transfer certain types of files within an instant message.)

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the specified instant message file transfer filter configuration.
(Instant message file transfer filter settings are used to block a user's ability to transfer certain types of files within an instant message.) This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsFileTransferFilterConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When sending instant messages, users can attach and send files to the other participants in the conversation.
Microsoft Lync Server 2010 can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent using a Lync Server 2010 client.

The Remove-CsFileTransferFilterConfiguration cmdlet enables you to delete a file transfer filter configuration.
For configurations at the site scope, Remove-CsFileTransferFilterConfiguration will remove the configuration; in turn, the users on the site will automatically inherit the global file transfer filter configuration.
Remove-CsFileTransferFilterConfiguration can also be run against the global configuration.
In that case, however, the global configuration will not be removed; instead, all the property values in that configuration will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsFileTransferFilterConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsFileTransferFilterConfiguration"}

**Below Content Applies To:** Lync Server 2013

When sending instant messages, users can attach and send files to the other participants in the conversation.
Lync Server can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent using a Lync Server client.

The Remove-CsFileTransferFilterConfiguration cmdlet enables you to delete a file transfer filter configuration.
For configurations at the site scope, Remove-CsFileTransferFilterConfiguration will remove the configuration; in turn, the users on the site will automatically inherit the global file transfer filter configuration.
Remove-CsFileTransferFilterConfiguration can also be run against the global configuration.
In that case, however, the global configuration will not be removed; instead, all the property values in that configuration will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsFileTransferFilterConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsFileTransferFilterConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

When sending instant messages, users can attach and send files to the other participants in the conversation.
Skype for Business Server 2015 can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent using a Skype for Business Server 2015 client.

The Remove-CsFileTransferFilterConfiguration cmdlet enables you to delete a file transfer filter configuration.
For configurations at the site scope, the Remove-CsFileTransferFilterConfiguration cmdlet will remove the configuration; in turn, the users on the site will automatically inherit the global file transfer filter configuration.
The Remove-CsFileTransferFilterConfiguration cmdlet can also be run against the global configuration.
In that case, however, the global configuration will not be removed; instead, all the property values in that configuration will be reset to their default values.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsFileTransferFilterConfiguration -Identity site:Redmond
```

In the preceding example, Remove-CsFileTransferFilterConfiguration is used to remove the file transfer filter configuration that has the Identity site:Redmond.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Remove-CsFileTransferFilterConfiguration is used to remove the file transfer filter configuration that has the Identity site:Redmond.

Remove-CsFileTransferFilterConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Remove-CsFileTransferFilterConfiguration cmdlet is used to remove the file transfer filter configuration that has the Identity site:Redmond.

Remove-CsFileTransferFilterConfiguration -Identity site:Redmond

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsFileTransferFilterConfiguration -Filter site:* | Remove-CsFileTransferFilterConfiguration
```

In Example 2, all the file transfer filter configurations at the site scope are removed.
To carry out this task, the command first uses Get-CsFileTransferFilterConfiguration and the Filter parameter to return all the configurations at the site scope.
The filter value "site:*" tells Get-CsFileTransferFilterConfiguration to return only those configurations that have an Identity that begins with the string value "site:".
The filtered collection of configurations is then piped to Remove-CsFileTransferFilterConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the file transfer filter configurations at the site scope are removed.
To carry out this task, the command first uses Get-CsFileTransferFilterConfiguration and the Filter parameter to return all the configurations at the site scope.
The filter value "site:*" tells Get-CsFileTransferFilterConfiguration to return only those configurations that have an Identity that begins with the string value "site:".
The filtered collection of configurations is then piped to Remove-CsFileTransferFilterConfiguration, which deletes each item in the collection.

Get-CsFileTransferFilterConfiguration -Filter site:* | Remove-CsFileTransferFilterConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the file transfer filter configurations at the site scope are removed.
To carry out this task, the command first uses the Get-CsFileTransferFilterConfiguration cmdlet and the Filter parameter to return all the configurations at the site scope.
The filter value "site:*" tells the Get-CsFileTransferFilterConfiguration cmdlet to return only those configurations that have an Identity that begins with the string value "site:".
The filtered collection of configurations is then piped to the Remove-CsFileTransferFilterConfiguration cmdlet, which deletes each item in the collection.

Get-CsFileTransferFilterConfiguration -Filter site:* | Remove-CsFileTransferFilterConfiguration

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsFileTransferFilterConfiguration | Where-Object {$_.Enabled -eq $False} | Remove-CsFileTransferFilterConfiguration
```

Example 3 shows you how you can remove all the file transfer filter configurations that are currently disabled.
To do this, the command first uses Get-CsFileTransferFilterConfiguration to return a collection of all the file transfer filter configurations currently in use in the organization.
That information is then piped to the Where-Object cmdlet, which selects only those file transfer filter configurations where the Enabled property is equal to (-eq) False ($False).
That filtered collection is then piped to Remove-CsFileTransferFilterConfiguration, which proceeds to remove each item in the filtered collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 shows you how you can remove all the file transfer filter configurations that are currently disabled.
To do this, the command first uses Get-CsFileTransferFilterConfiguration to return a collection of all the file transfer filter configurations currently in use in the organization.
That information is then piped to the Where-Object cmdlet, which selects only those file transfer filter configurations where the Enabled property is equal to (-eq) False ($False).
That filtered collection is then piped to Remove-CsFileTransferFilterConfiguration, which proceeds to remove each item in the filtered collection.

Get-CsFileTransferFilterConfiguration | Where-Object {$_.Enabled -eq $False} | Remove-CsFileTransferFilterConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 shows you how you can remove all the file transfer filter configurations that are currently disabled.
To do this, the command first uses the Get-CsFileTransferFilterConfiguration cmdlet to return a collection of all the file transfer filter configurations currently in use in the organization.
That information is then piped to the Where-Object cmdlet, which selects only those file transfer filter configurations where the Enabled property is equal to (-eq) False ($False).
That filtered collection is then piped to the Remove-CsFileTransferFilterConfiguration cmdlet, which proceeds to remove each item in the filtered collection.

Get-CsFileTransferFilterConfiguration | Where-Object {$_.Enabled -eq $False} | Remove-CsFileTransferFilterConfiguration

## PARAMETERS

### -Identity
Unique identifier for the file transfer configuration to be removed.
To refer to the global configuration, use this syntax: -Identity global.
To refer to a configuration at the site scope, use syntax similar to this: -Identity site:Redmond.
Note that you cannot use wildcard values when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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
Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.FileTransferFilterConfiguration object.
Accepts pipelined input of file transfer filter configuration objects.

## OUTPUTS

###  
This cmdlet does not return a value or object.
Instead, it removes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.FileTransferFilterConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/faae4d4b-ea8b-4d50-9c46-16a075476642(OCS.14).aspx)

[New-CsFileTransferFilterConfiguration]()

[Set-CsFileTransferFilterConfiguration]()

[Get-CsFileTransferFilterConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/faae4d4b-ea8b-4d50-9c46-16a075476642(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/faae4d4b-ea8b-4d50-9c46-16a075476642(OCS.16).aspx)

