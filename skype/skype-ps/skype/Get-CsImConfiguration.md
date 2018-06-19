---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsImConfiguration
schema: 2.0.0
---

# Get-CsImConfiguration

## SYNOPSIS
Use the Get-CsImConfiguration cmdlet to retrieve information about Instant Messaging (IM) configurations.

## SYNTAX

### Filter
```
Get-CsImConfiguration [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsImConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsImConfiguration cmdlet to retrieve information about Instant Messaging (IM) configurations.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "<DesiredCmdletName>"}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsImConfiguration
```

This example returns information for the Global IM configuration.

## PARAMETERS

### -Filter
{{Fill Filter Description}}

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Enables you to use wildcard characters in order to return a collection of items. For instance the following usage specifies all the site scoped IM configurations: -Filter "site:*" . Filter and and Filter and Identity are mutually exclusive.


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Presence of this switch causes the cmdlet to retrieve information from the local replica of the Central Management store, rather than from Central Management store itself. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies the globally unique identifier (GUID) of the Skype for Business Online tenant account on which the cmdlet will operate. For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308". You can return the tenant ID for each of your Skype for Business Online tenants by running this command: Get-CsTenant | Select-Object DisplayName, TenantID.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### System.Object


## NOTES

## RELATED LINKS

