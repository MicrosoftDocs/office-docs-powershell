---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpapplicationcustomizer
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Set-PnPApplicationCustomizer
---

# Set-PnPApplicationCustomizer

## SYNOPSIS
Updates a SharePoint Framework client side extension application customizer

## SYNTAX 

### Custom Action Id
```powershell
Set-PnPApplicationCustomizer [-Identity <UserCustomActionPipeBind>]
                             [-Scope <CustomActionScope>]
                             [-Title <String>]
                             [-Description <String>]
                             [-Sequence <Int>]
                             [-ClientSideComponentProperties <String>]
                             [-Web <WebPipeBind>]
                             [-Connection <PnPConnection>]
```

### Client Side Component Id
```powershell
Set-PnPApplicationCustomizer [-ClientSideComponentId <GuidPipeBind>]
                             [-Scope <CustomActionScope>]
                             [-Title <String>]
                             [-Description <String>]
                             [-Sequence <Int>]
                             [-ClientSideComponentProperties <String>]
                             [-Web <WebPipeBind>]
                             [-Connection <PnPConnection>]
```

## DESCRIPTION
Updates a SharePoint Framework client side extension application customizer by updating its custom action. Only the properties that will be provided will be updated. Others will remain as they are.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPApplicationCustomizer -Identity aa66f67e-46c0-4474-8a82-42bf467d07f2
```

Updates the custom action representing the client side extension registration with the id 'aa66f67e-46c0-4474-8a82-42bf467d07f2'.

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPApplicationCustomizer -ClientSideComponentId aa66f67e-46c0-4474-8a82-42bf467d07f2 -Scope web -ClientSideComponentProperties "{`"sourceTermSet`":`"PnP-CollabFooter-SharedLinks`",`"personalItemsStorageProperty`":`"PnP-CollabFooter-MyLinks`"}
```

Updates the custom action(s) properties being registered for a SharePoint Framework solution having the id 'aa66f67e-46c0-4474-8a82-42bf467d07f2' in its manifest from the current web.

## PARAMETERS

### -ClientSideComponentId
The Client Side Component Id of the SharePoint Framework client side extension application customizer found in the manifest for which existing custom action(s) should be updated

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: GuidPipeBind
Parameter Sets: Client Side Component Id

Required: False
Position: Named
Accept pipeline input: False
```

### -ClientSideComponentProperties
The Client Side Component Properties of the application customizer to update. Specify values as a json string : "{Property1 : 'Value1', Property2: 'Value2'}". Omit to not update this property.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Description
The description of the application customizer. Omit to not update this property.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The id or name of the CustomAction representing the client side extension registration that needs to be updated or a CustomAction instance itself

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: UserCustomActionPipeBind
Parameter Sets: Custom Action Id

Required: False
Position: 0
Accept pipeline input: True
```

### -Scope
Define if the CustomAction representing the client side extension registration is to be found at the web or site collection scope. Specify All to update the component on both web and site collection level.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: CustomActionScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Sequence
Sequence of this application customizer being injected. Use when you have a specific sequence with which to have multiple application customizers being added to the page. Omit to not update this property.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Title
The title of the application customizer. Omit to not update this property.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)