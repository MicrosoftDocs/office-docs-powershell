---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Get-CsClsSecurityGroup
schema: 2.0.0
---

# Get-CsClsSecurityGroup

## SYNOPSIS
Returns information about the centralized logging configuration security groups in use in the organization.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
Security groups are intended for use with Skype for Business Online.


## SYNTAX

### Filter
```
Get-CsClsSecurityGroup [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsClsSecurityGroup [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

With Skype for Business Online, security groups are used to determine which users have access to the personally-identifiable information that is written to the log files.
Security groups are created by using the New-CsClsSecurityGroup cmdlet and then are added to a collection of centralized logging configuration settings.
You can return information about your centralized logging security groups by using the Get-CsClsSecurityGroup cmdlet.

The functions carried out by the Get-CsClsSecurityGroup cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsClsSecurityGroup
```

The command shown in Example 1 returns information about all the centralized logging security groups configured for use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsClsSecurityGroup -Identity "global/HelpDesk"
```

In Example 2, information is returned for a single centralized logging security group: the group with the Identity global/helpdesk.

### -------------------------- Example 3 --------------------------
```
Get-CsClsSecurityGroup -Filter "global/*"
```

Example 3 returns information for all the centralized logging security groups configured at the global scope.
To do this, the Filter parameter is included along with the filter value "global/*"; that filter value limits the returned data to groups configured at the global scope.

### -------------------------- Example 4 --------------------------
```
Get-CsClsSecurityGroup | Where-Object {$_.AccessLevel -eq "RedmondSupport"}
```

The command shown in Example 4 returns all the centralized logging security groups where the access level has been set to RedmondSupport.
To carry out this task, the command first calls the Get-CsClsSecurityGroup cmdlet without any parameters; that returns a collection of all the available centralized logging security groups.
That collection is then piped to the Where-Object cmdlet, which picks out only those groups where the AccessLevel property is equal to RedmondSupport.


## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a centralized logging security group (or groups).
For example, to return a collection of all the groups configured at the global scope, use this syntax:

`-Filter "global/*"`

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
Unique identifier for the centralized logging security group to be returned.
A security group identity consists of the scope where the group was created followed by the group name.
For example, to return a group named HelpDesk created at the global scope, use the following syntax:

`-Identity "global/HelpDesk"`

If this parameter is not specified then the Get-CsClsSecurityGroup cmdlet returns information about all your centralized logging security groups.

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
Retrieves the centralized logging configuration data from the local replica of the Central Management store, rather than the Central Management store itself.

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SecurityGroup#Decorated


## NOTES


## RELATED LINKS

[New-CsClsSecurityGroup]()

[Remove-CsClsSecurityGroup]()

[Set-CsClsSecurityGroup]()