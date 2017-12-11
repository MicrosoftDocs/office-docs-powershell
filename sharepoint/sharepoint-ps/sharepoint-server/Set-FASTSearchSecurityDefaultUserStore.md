---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchSecurityDefaultUserStore
---

# Set-FASTSearchSecurityDefaultUserStore

## SYNOPSIS
Updates the default user store general setting.

## SYNTAX

### ProcessId
```
Set-FASTSearchSecurityDefaultUserStore [[-DefaultUserStoreId] <String>] [<CommonParameters>]
```

### ProcessGeneralSetting
```
Set-FASTSearchSecurityDefaultUserStore [[-GeneralSetting] <DefaultUserStoreSetting>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the identity of the user store that users and groups are looked up in, to determine the appropriate document access if the user store identity is not specified when looking up the user or group.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Set-FASTSearchSecurityDefaultUserStore -DefaultUserStoreId win
```

This example sets the default user store to "win".

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$defuserstore | Set-FASTSearchSecurityDefaultUserStore
```

This example updates the default user store using values from a pipeline GeneralSetting parameter.

In this example, the $defuserstoreGeneralSetting was created with this command: $defuserstore = Get-FASTSearchSecurityDefaultUserStore.

## PARAMETERS

### -DefaultUserStoreId
The identity of the user store to set as the default user store.

```yaml
Type: String
Parameter Sets: ProcessId
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GeneralSetting
A DefaultUserStoreSettinginstance whose property values are used for the DefaultUserStoreSetting being updated.

```yaml
Type: DefaultUserStoreSetting
Parameter Sets: ProcessGeneralSetting
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 9999
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-FASTSearchSecurityDefaultUserStore]()

